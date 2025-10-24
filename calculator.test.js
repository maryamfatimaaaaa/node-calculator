const calc = require('./calculator');

test('adds 2 + 3 to equal 5', () => {
  expect(calc.add(2, 3)).toBe(5);
});

test('subtracts 5 - 3 to equal 2', () => {
  expect(calc.subtract(5, 3)).toBe(2);
});

test('multiplies 4 * 2 to equal 8', () => {
  expect(calc.multiply(4, 2)).toBe(8);
});

test('divides 10 / 2 to equal 5', () => {
  expect(calc.divide(10, 2)).toBe(5);
});

test('throws error when dividing by zero', () => {
  expect(() => calc.divide(5, 0)).toThrow("Cannot divide by zero");
});
