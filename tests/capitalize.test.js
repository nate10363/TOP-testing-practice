/* eslint-disable no-undef */
const capitalize = require('../scripts/capitalize');

// test('adds 1 + 2 to equal 3', () => {
//   expect(sum(1, 2)).toBe(3);
// });

test('Capitalize Ex 1', () => {
  expect(capitalize('hello')).toBe('Hello');
});

test('Capitalize Ex 2', () => {
  expect(capitalize('i need my honor to be restored')).toBe('I need my honor to be restored');
});

test('Capitalize Ex 3', () => {
  expect(capitalize('by capturing the avatar')).toBe('By capturing the avatar');
});
