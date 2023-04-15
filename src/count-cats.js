const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */

// countCats([
//   ['##', 'dd', '00'],
//   ['^^', '..', 'ss'],
//   ['AA', 'dd', 'Oo'],
// ]);

function countCats(matrix) {
  let count = 0;
  for (let subMatrix of matrix) {
    for (let mayBeCats of subMatrix)
    if (mayBeCats === '^^') {
      //console.log('Found', mayBeCats);
      count ++;
    } else {
      //console.log('Not found', mayBeCats);
    }
  }
  //console.debug(count);
  return count;
}

module.exports = {
  countCats
};
