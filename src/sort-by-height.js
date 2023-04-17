const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let withoutOnes = [];
  arr.forEach(element => {
    if (element !== -1) {
      withoutOnes.push(element);
    }
  });
  let sortWithoutOnes = withoutOnes.sort((a, b) => a - b);
  //console.log(sortWithoutOnes);
  let result = [];
  let index = 0;
  arr.forEach(element => {
    if (element !== -1) {
      result.push(sortWithoutOnes[index]);
      index ++;
    } else {
      result.push(element);
    }
  });
  // console.log('[-1, 150, 160, 170, -1, -1, 180, 190]');
  //console.log(result);
  return  result;
}

sortByHeight([4, 2, 9, 11, 2, 16]); //[2, 2, 4, 9, 11, 16],
// sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]) ///[-1, 150, 160, 170, -1, -1, 180, 190]

module.exports = {
  sortByHeight
};
