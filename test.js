// test/test.js
import { deepClone } from 'src/deepClone.js';

// Example objects for testing
const obj = {
  name: 'Test',
  date: new Date(),
  nested: {
    array: [1, 2, 3],
    objRef: {
      key: 'value',
    },
  },
};

// Introduce a circular reference
obj.nested.self = obj;

const clonedObj = deepClone(obj);

console.log('Original Object:', obj);
console.log('Cloned Object:', clonedObj);

// Check if they are deeply cloned and not the same reference
console.log(
  'Is deep clone?',
  obj !== clonedObj && obj.nested !== clonedObj.nested,
);
