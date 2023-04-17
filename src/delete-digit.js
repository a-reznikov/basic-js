const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let arr = String(n).split('');
  //console.log(arr);
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let newNumber = [];
    if (i === 0) {
      newNumber = arr.slice(1, arr.length);
    } else if (i === arr.length - 1 && arr.length === 2) {
      newNumber = arr.slice(0, arr.length - 1);
    } else {
      let firstSlice = arr.slice(0, i - 1);
      let secondSlice = arr.slice(i , arr.length);
      newNumber = firstSlice.concat(secondSlice);
    }
    let numbers = newNumber.join('');
    newArr.push(+numbers);
  }
  //console.log(newArr);
  let arrRes = newArr.sort((a, b) => a - b);
  // console.log(arrRes);
  //console.log('result', arrRes[arrRes.length - 1]);
  return arrRes[arrRes.length - 1];
}

deleteDigit(152); // 52);
deleteDigit(1001); //101);
deleteDigit(10); //1);
deleteDigit(222219); //22229);
deleteDigit(109); //19);
deleteDigit(342); //42);

// deleteDigit(222219);  //22229)

module.exports = {
  deleteDigit
};
