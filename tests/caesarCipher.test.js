/* eslint-disable no-undef */
const caesarCipher = require('../scripts/caesarCipher');

test('Alphabet Shift Test', () => {
  expect(caesarCipher('abcdefghijklmnopqrstuvwxyz', 3)).toBe('DEFGHIJKLMNOPQRSTUVWXYZABC');
});

test('Single words Test 1', () => {
  expect(caesarCipher('sebastian', 3)).toBe('VHEDVWLDQ');
});

test('Single words Test 2', () => {
  expect(caesarCipher('Roland', 3)).toBe('URODQG');
});

test('Single words Test 3', () => {
  expect(caesarCipher('theAvatar', 3)).toBe('WKHDYDWDU');
});

test('Multiple words, no sp. char., Test 1', () => {
  expect(caesarCipher('avatar Roku', 3)).toBe('DYDWDU URNX');
});

test('Multiple words, with sp. char., Test 2', () => {
  expect(caesarCipher('Boom J00M ~!@#', 3)).toBe('ERRP M00P ~!@#');
});

test('Multiple words, with sp. char., Test 3', () => {
  expect(caesarCipher('@v4t4r Ky0sh1', 3)).toBe('@Y4W4U NB0VK1');
});

test('Multiple words, with sp. char., Test 4', () => {
  expect(caesarCipher('AVATAR! KURUK', 3)).toBe('DYDWDU! NXUXN');
});
