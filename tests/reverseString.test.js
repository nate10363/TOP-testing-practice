/* eslint-disable no-undef */
const reverseString = require('../scripts/reverseString');

test('reverseString Ex 1', () => {
  expect(reverseString('hello')).toBe('olleh');
});

test('reverseString Ex 2', () => {
  expect(reverseString('your powers are useless on me')).toBe('em no sselesu era srewop ruoy');
});

test('reverseString Ex 3', () => {
  expect(reverseString('it was bitter work')).toBe('krow rettib saw ti');
});
