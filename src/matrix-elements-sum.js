const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let column0 = [];
  let column1= [];
  let column2 = [];
  let column3 = [];
  let columns = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++)  {
      if (j === 0) {
        column0.push(matrix[i][j]);
      } else if (j === 1) {
        column1.push(matrix[i][j]);
      } else if (j === 2) {
        column2.push(matrix[i][j]);
      } else if (j === 3) {
        column3.push(matrix[i][j]);
      }
      columns ++;
    }
  }
  let newMatrix = [];
  let result = 0;

  newMatrix.push(column0);
  newMatrix.push(column1);
  newMatrix.push(column2);
  newMatrix.push(column3);

  for (let i = 0; i < newMatrix.length; i++) {
    for (let j = 0; j < newMatrix[i].length; j++)  {
      if (newMatrix[i][j] === 0) {
        break;
      } else {
        result += +newMatrix[i][j];
      }
    }
  }

  // console.log(matrix);
  // console.log(newMatrix);
  // console.log(result);
  return result;
}

// getMatrixElementsSum([
//   [1, 1, 1],
//   [2, 2, 2],
//   [3, 3, 3],]);

getMatrixElementsSum([
  [0, 1, 1, 2],
  [0, 5, 0, 0],
  [2, 0, 3, 3],
]); // 9);

module.exports = {
  getMatrixElementsSum
};
