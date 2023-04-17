const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  let start = email.indexOf("@");
  let newStr = email.slice(start + 1);
  let nextSimbol = newStr.indexOf("@");
  if (nextSimbol) {
    return newStr.slice(nextSimbol + 1);
  } else {
    return email.slice(start + 1);
  }
}

module.exports = {
  getEmailDomain
};
