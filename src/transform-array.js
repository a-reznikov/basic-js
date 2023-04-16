const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {    
    if (Array.isArray(arr)) {
      const discardNext = '--discard-next';
      const discardPrev = '--discard-prev';
      const doubleNext = '--double-next';
      const doublePrev = '--double-prev';
      let transformArray = arr.slice(0);
      let lenArr = transformArray.length;
      //console.log('transformArray', transformArray);
      let lastArr = [];

     for (let i = 0; i < lenArr; i++) {
      //console.log('i', i, 'transformArray[i]', transformArray[i]);
      if (transformArray[i] === discardNext) {
        //console.log('--discard-next');
        transformArray.splice(i + 1, 1);
        //console.log('transformArray', transformArray);
        lenArr = lenArr - 1; 
      } else if (transformArray[i] === discardPrev) {
       // console.log('transformArray', transformArray);
        if (i !== 0) {
          transformArray.splice(i - 1, 1);
          lenArr = lenArr - 1;
        }
      } else if (transformArray[i] === doubleNext) {
        transformArray[i] = transformArray[i + 1];
      } else if (transformArray[i] === doublePrev) {
        transformArray[i] = transformArray[i - 1];
      }
     }

     transformArray.forEach(element => {
      if (element !== discardNext && element !== discardPrev && element !== doubleNext && element !== doublePrev && element !== undefined) {
        lastArr.push(element);
      }
    });

     console.log(lastArr);
     return lastArr;

    } else {
      //console.log('Error');
      throw Error(`'arr' parameter must be an instance of the Array!`);
    }
    //console.log(transformArray);
}



// transform(['--discard-prev', 1, 2, 3]);

// transform([1, 2, 3, '--discard-next', 1337, '--double-prev', 4, 5]); //[1, 2, 3, 4, 5]

module.exports = {
  transform
};
