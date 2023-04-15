const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;
const k = 0.693 / HALF_LIFE_PERIOD;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  if (!sampleActivity) {
  //  console.log('!sampleActivity');
    return false;
  } else if (typeof sampleActivity !== 'string') {
  //  console.log('typeof sampleActivity != String', typeof sampleActivity);
    return false;
  } else if (sampleActivity <= 0 || sampleActivity > 15) {
    // console.log('sampleActivity <= 0 || sampleActivity > 15');
    return false;
  } else if (isNaN(Number(sampleActivity))) {
    // console.log('isNaN(Number(sampleActivity))');
    return false;
  } else {
    const howOld = Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivity) / k);
    //console.log(howOld);
    return howOld;
  }
}

dateSample('3.142'); //12926);
dateSample('one'); //false);

module.exports = {
  dateSample
};
