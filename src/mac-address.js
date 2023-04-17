const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  let arrMac = n.split("-");
  let strMac = '';
  let isMac = true;
  const Mac = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
  if (arrMac.length !== 6) {
    return false;
  } else {
    strMac = arrMac.join('');
    let newArr = strMac.split('');
    //console.log(newArr);
    for (let char in newArr) {
      if (Mac.indexOf(strMac[char]) === -1) {
        isMac = false;
      }
    }
    if (isMac) {
      //console.log(isMac);
      return true;
    } else {
      //console.log(isMac);
      return false;
    }
  }
  console.log(strMac);
  console.log(arrMac);
}


isMAC48Address('00-1B-63-84-45-E6'); /// true)
// isMAC48Address('Z1-1B-63-84-45-E6'); ///false
// isMAC48Address('not a MAC-48 address'); // false);

module.exports = {
  isMAC48Address
};
