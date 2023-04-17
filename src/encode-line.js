const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let template = '';
  let arr = str.split('');
  //console.log(arr);
  let count = 1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      count ++;
    } else {
      if (count === 1) {
        template = template + (`${arr[i]}`);
      } else {
        template = template + (`${count}${arr[i]}`);
      }
      count = 1;
    }
  }
  //console.log(template);
  return template;
}

// encodeLine('aaaatttt'); // '4a4t')
// encodeLine('aabbccc'); //'2a2b3c')
encodeLine('abbcca'); // 'a2b2ca')

module.exports = {
  encodeLine
};
