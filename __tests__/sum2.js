const sum = require('../sum');

test('add 2 and 3 to give 5', () => {
  expect(sum(2, 3)).toBe(5);
});