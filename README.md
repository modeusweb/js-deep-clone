# Deep Clone Utility

Deep Clone Utility is a JavaScript function that performs a deep cloning of an object or array, supporting classes and Date objects. It handles circular references to avoid infinite recursion.

## Features

- **Deep Cloning**: Recursively clones all nested objects and arrays.
- **Support for Special Data Types**: Handles `Date` objects and custom classes, ensuring accurate type preservation.
- **Circular Reference Handling**: Prevents infinite recursion by tracking circular references with `WeakMap`.

## Usage

### Importing the Function

To use the `deepClone` function, you can import it from the file where it is defined:

```javascript
import { deepClone } from './path/to/deepClone.js';
```

### Function Signature

```javascript
deepClone(input, map = new WeakMap())
```

- `input`: The object or array you want to deeply clone.
- `map`: (optional): An instance of WeakMap used internally to track circular references.

### Returns

The function returns a deeply cloned copy of the `input` object or array.

## Example

```javascript
import { deepClone } from './deepClone';

const original = {
  name: "Alice",
  birthDate: new Date(),
  friends: ["Bob", "Charlie"],
  meta: { isActive: true }
};

// Creating a circular reference
original.self = original;

const cloned = deepClone(original);

console.log(cloned);
console.log(cloned !== original); // true - cloned is a new object
console.log(cloned.birthDate instanceof Date); // true - Date is preserved
console.log(cloned.self === cloned); // true - circular reference preserved
```

## Implementation Details

The deepClone function handles cloning as follows:

1. If the input is a primitive type or a function, it returns the same value.
2. If the input is an object or array, it creates a new object or array, respectively.
3. If the input is a Date object, it creates a new Date object with the same value.
4. If the input is a class, it creates a new instance of the class with the same properties.
5. If the input is an object or array, it clones its properties recursively.
6. If the input is a circular reference, it returns the same object.

## Error Handling

If the function encounters a data type it does not support, it will throw an error: `'Unsupported data type.'`

## Requirements

No external dependencies are required. The function is implemented in pure JavaScript.

## License

This project is licensed under the MIT License.