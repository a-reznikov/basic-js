const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let counterDomains = {};

  for (let parts of domains) {
    console.log(parts);
    let partSplit = parts.split('.');
    let revPartSplit = partSplit.reverse();

    console.log(revPartSplit);
    
    for (let i = 0; i < revPartSplit.length;) {
      let newPart = revPartSplit.slice(0, i + 1).join('.');
      let arrayDomains = `.${newPart}`;
      counterDomains[arrayDomains] = counterDomains[arrayDomains] ? counterDomains[arrayDomains] + 1 : 1;
      i++;
    }
  }
  console.log(counterDomains);
  return counterDomains;
  
}

getDNSStats(['epam.com', 'info.epam.com']); //{ '.com': 2, '.com.epam': 2, '.com.epam.info': 1 }

module.exports = {
  getDNSStats
};
