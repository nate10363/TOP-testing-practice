/* eslint-disable no-use-before-define */
const analyzeArray = (arr) => (
  {
    average: getAverage(arr),
    min: Math.min(...arr),
    max: Math.max(...arr),
    length: arr.length,
  });

const getAverage = (arr) => {
  const sum = arr.reduce((acc, el) => acc + el, 0);
  return sum / arr.length;
};

module.exports = analyzeArray;
