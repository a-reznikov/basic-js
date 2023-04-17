const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let strN = String(n);
  let result = 0;
  for (let char in strN) {
    result += +strN[char];
    //console.log(strN[char]);
  }
  if (result > 9) {
    return getSumOfDigits(result);
  } else {
    //console.log(result);
    return result;
  }
  console.log(result);

  // if (strN.length === 1) {
  //   return +strN;
  // } else {
    
  // }
}

getSumOfDigits(91); // 1

module.exports = {
  getSumOfDigits
};
