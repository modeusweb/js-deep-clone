/**
 * Function to deeply clone an object or array, supporting Date objects.
 * Handles circular references to avoid infinite recursion.
 * @param {Object|Array} input - The object or array to clone.
 * @param {WeakMap} [map=new WeakMap()] - WeakMap to track circular references.
 * @returns {Object|Array} - A deeply cloned copy of the input.
 */
export function deepClone(input, map = new WeakMap()) {
  // Handle primitive types and functions
  if (input === null || typeof input !== 'object') {
    return input;
  }

  // Handle Date
  if (input instanceof Date) {
    return new Date(input);
  }

  // Handle Array
  if (Array.isArray(input)) {
    const arrayCopy = [];
    map.set(input, arrayCopy);
    input.forEach((item, index) => {
      arrayCopy[index] = deepClone(item, map);
    });
    return arrayCopy;
  }

  // Handle Objects
  if (input instanceof Object) {
    if (map.has(input)) {
      return map.get(input); // Return the reference for circular structures
    }

    const objectCopy = {};
    map.set(input, objectCopy);

    Object.keys(input).forEach((key) => {
      objectCopy[key] = deepClone(input[key], map);
    });

    return objectCopy;
  }

  // Fallback for unsupported types
  throw new Error('Unsupported data type.');
}
