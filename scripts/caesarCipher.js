/* eslint-disable prefer-const */
/* eslint-disable no-plusplus */
const alphabet = 'abcdefghijklmnopqrstuvwxyz';

const shiftAlphabet = (key) => {
  const keyMod = key % 26;
  const cipherText = (alphabet.slice(keyMod) + alphabet.slice(0, keyMod)).toUpperCase();
  return cipherText;
};

const caesarCipher = (phrase, key) => {
  const cipherText = shiftAlphabet(key);
  let cipheredPhrase = '';
  const regex = /[a-zA-Z]/i;
  const regexSpace = /\s/;
  for (let i = 0; i < phrase.length; i++) {
    if (phrase[i].toLowerCase().match(regex)) {
      cipheredPhrase += cipherText[alphabet.indexOf(phrase[i].toLowerCase())];
    } else if (regexSpace.test(phrase[i])) {
      cipheredPhrase += phrase[i];
    } else {
      cipheredPhrase += phrase[i];
    }
  }
  return cipheredPhrase;
};

module.exports = caesarCipher;
