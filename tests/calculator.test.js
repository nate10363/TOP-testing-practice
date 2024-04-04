/* eslint-disable no-undef */
const calculator = require('../scripts/calculator');

test('Calculator Add Ex 1', () => {
  expect(calculator.add(5, 13)).toBe(18);
});

test('Calculator Add Ex 2', () => {
  expect(calculator.add(26, 24)).toBe(50);
});

test('Calculator Subtract Ex 1', () => {
  expect(calculator.subtract(13, 6)).toBe(7);
});

test('Calculator Subtract Ex 2', () => {
  expect(calculator.subtract(4022, 1988)).toBe(2034);
});

test('Calculator Multiply Ex 1', () => {
  expect(calculator.multiply(43, 7)).toBe(301);
});

test('Calculator Multiply Ex 2', () => {
  expect(calculator.multiply(112, 15)).toBe(1680);
});

test('Calculator Divide Ex 1', () => {
  expect(calculator.divide(15, 3)).toBe(5);
});

test('Calculator Divide Ex 2', () => {
  expect(calculator.divide(730, 10)).toBe(73);
});
