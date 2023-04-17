const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let s1Obj = {};
  let s2Obj = {};
  let s1Arr = s1.split('');
  let s2Arr = s2.split('');
  let resultArr = [];
  //console.log(s1Arr);
  //console.log(s2Arr);
  s1Arr.forEach(element => {
    if (s1Obj[element] === undefined) {
      s1Obj[element] = 1;
    } else {
      s1Obj[element] = s1Obj[element] + 1;
    }
  });
  s2Arr.forEach(element => {
    if (s2Obj[element] === undefined) {
      s2Obj[element] = 1;
    } else {
      s2Obj[element] = s2Obj[element] + 1;
    }
  });
  //console.log(s1Obj);
  //console.log(s2Obj);
  for (key in s1Obj) {
    if (key in s2Obj) {
      let min = Math.min(s1Obj[key], s2Obj[key]);
      resultArr.push(min);
    }
  }
  let count = 0;
  resultArr.forEach(element => {
    count += element;
  });
  //console.log(count);
  return count;
}

getCommonCharacterCount('aabcc', 'adcaa'); // 3

module.exports = {
  getCommonCharacterCount
};
