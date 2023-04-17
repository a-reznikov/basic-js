const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let template = '';
  let templateArr = [];
  let additionsWithSep = '';
  let stringWithAdd = '';
  if (options.repeatTimes) {
    if (options.additionRepeatTimes) {
      let additionArr = [];
      for (let i = 0; i < options.additionRepeatTimes; i++) {
        if (options.addition === undefined) {

        } else {
          additionArr.push(String(options.addition));
        }
      }
      if (String(options.additionSeparator) === "" || options.additionSeparator === undefined) {
        additionsWithSep = additionArr.join('|');
      } else {
        additionsWithSep = additionArr.join(`${options.additionSeparator}`);
      }
    } else {
      if (options.addition === undefined) {

      } else {
        additionsWithSep = String(options.addition);
      }  
    }
    stringWithAdd = str + additionsWithSep;
    for (let i = 0; i < options.repeatTimes; i++) {
      if (stringWithAdd !== ''){
        templateArr.push(stringWithAdd);
      }
    }
    if (String(options.separator) === "" || options.separator === undefined) {
      template = templateArr.join('+');
    } else {
      template = templateArr.join(`${options.separator}`);
    }
    //console.log(template)
    return template;
  } else {
    if (options.additionRepeatTimes) {
      let additionArr = [];
      for (let i = 0; i < options.additionRepeatTimes; i++) {
        if (options.addition === undefined) {

        } else {
          additionArr.push(String(options.addition));
        }
      }
      if (String(options.additionSeparator) === "" || options.additionSeparator === undefined) {
        additionsWithSep = additionArr.join('|');
      } else {
        if (options.addition === undefined) {

        } else {
          additionsWithSep = String(options.addition);
        }  
      }
    } else {
      if (options.addition === undefined) {

      } else {
        additionsWithSep = String(options.addition);
      }  
    }
    template = str + additionsWithSep;
    //console.log(template)
    return template;
  }
}

// repeater('la', { repeatTimes: 3 }); //'la+la+la');
// console.log('STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS');
// repeater('STRING', { repeatTimes: 3, separator: '**', addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })

module.exports = {
  repeater
};
