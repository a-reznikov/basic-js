const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(arr) {
  let result = [];
  console.log(matrix[1][2]);
 for (let i = 0; i < matrix.length; i++) {
  let subResult = [];
  for (let j = 0; j < matrix[i].length; j++)  {
    let count = 0;
    if (i === 0 && j === 0) {
      
    }
    if (i > 1 && j > 1) {
      if (matrix[i - 1][j - 1]) {
        console.log(matrix[i][j]);
        count ++;
      }
      if (matrix[i - 1][j]) {
        count ++;
      }
      if (matrix[i - 1][j + 1]) {
        count ++;
      }
      if (matrix[i][j - 1]) {
        count ++;
      }
      if (matrix[i][j + 1]) {
        count ++;
      }
      if (matrix[i + 1][j - 1]) {
        count ++;
      }
      if (matrix[i + 1][j]) {
        count ++;
      }
      if (matrix[i + 1][j + 1]) {
        count ++;
      }
    } else if (i < 1 && j >)
    
    subResult.push(count);
  }
  result.push(subResult);
 }


  console.log(result);
  return result;
}


matrix = [
 [true, false, false],
 [false, true, false],
 [false, false, false]
 ];
minesweeper(matrix);


module.exports = {
  minesweeper
};
