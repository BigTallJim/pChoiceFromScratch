// const add = require('../sum');
import sum from '../sum.js';
console.log(sum);

test('add 1 and 2 to give 3', () => {
  expect(sum(1, 2)).toBe(3);
});