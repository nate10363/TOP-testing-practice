/* eslint-disable no-undef */
const analyzeArray = require('../scripts/analyzeArray');

test('Average Ex 1', () => {
  expect(analyzeArray([3, 2, 1])).toStrictEqual({
    average: 2,
    min: 1,
    max: 3,
    length: 3,
  });
});

test('Average Ex 2', () => {
  expect(analyzeArray([10, 30, 2, 15])).toStrictEqual({
    average: 14.25,
    min: 2,
    max: 30,
    length: 4,
  });
});

test('Average Ex 3', () => {
  expect(analyzeArray([20, 5, 7, 18, 3, 1])).toStrictEqual({
    average: 9,
    min: 1,
    max: 20,
    length: 6,
  });
});
