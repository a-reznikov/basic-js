const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  //console.log('_________________________________\n', date);
  //console.log('_________________________________\n', typeof date);
  //console.log('_________________________________\n', Object.getPrototypeOf(date));
  const UNABLE = 'Unable to determine the time of year!';
  const INVALID = 'Invalid date!';
  let isDate = true;

  if (!date && date !== 0) {
    //console.log(UNABLE);
    return UNABLE;
  }

  if (typeof date === 'string' || Number.isInteger(date) || date === 0) {
    isDate = false;
    //console.log('Cath Deep');
    throw Error('Invalid date!');
  }


  try {
    date.getMonth();
  } catch(err) {
    isDate = false;
    //console.log('Fail');
    throw Error('Invalid date!');
  }
  
  if (isDate) {
    //console.log("Enter");
    let month = date.getMonth();
    const WINTER = 'winter';
    const SPRING = 'spring';
    const SUMMER = 'summer';
    const AUTUMN = 'autumn';

    try {
      date.toISOString();
      //console.log("toISOString()", date.toISOString());
    } catch(err) {
      isDate = false;
      //console.log('Fail');
      throw Error('Invalid date!');
    }
    
    if (month === 0 || month === 1 || month === 11) {
      // console.log(WINTER);
      return WINTER;
    } else if (month === 2 || month === 3 || month === 4) {
      // console.log(SPRING);
      return SPRING;
    } else if (month === 5 || month === 6 || month === 7) {
      // console.log(SUMMER);
      return SUMMER;
    } else if (month === 8 || month === 9 || month === 10) {
      // console.log(AUTUMN);
      return AUTUMN;
    }
  }
  
}

// getSeason(new Date(2019, 11, 22, 23, 45, 11, 500));

// getSeason(Date.prototype.getDay.call(new Date(1812, 8, 9, 10, 11, 12)));

// const deeperFakeDate = {
//   toString() {
//       return Date.prototype.toString.call(new Date());
//   },
//   getMonth() {
//       return Date.prototype.getMonth.call(new Date());
//   },
//   getFullYear() {
//       return Date.prototype.getFullYear.call(new Date(1994, 1, 2, 3, 4, 5));
//   },
//   getDate() {
//       return Date.prototype.getDate.call(new Date(2020, 0, 3, 4, 5, 6));
//   },
//   getHours() {
//       return Date.prototype.getHours.call(new Date(1978, 2, 4, 5, 6, 7));
//   },
//   getMinutes() {
//       return Date.prototype.getMinutes.call(new Date(202, 3, 5, 6, 7, 8));
//   },
//   getSeconds() {
//       return Date.prototype.getSeconds.call(new Date(1, 4, 6, 7, 8, 9));
//   },
//   getMilliseconds() {
//       return Date.prototype.getMilliseconds.call(new Date(2019, 7, 8, 9, 10, 11));
//   },
//   getDay() {
//       return Date.prototype.getDay.call(new Date(1812, 8, 9, 10, 11, 12));
//   },
//   [Symbol.toStringTag]: 'Date'
// };

// class ValidatorClass {
//   get [Symbol.toStringTag]() {
//     return 'Data';
//   }
// }

// getSeason(Object.prototype.toString.call(new ValidatorClass()));
// getSeason(Date.prototype.getFullYear.call(new Date(1994, 1, 2, 3, 4, 5)));
// getSeason(Date.prototype.getDate.call(new Date(2020, 0, 3, 4, 5, 6)));


// function getFullYear() {
//   return Date.prototype.getFullYear.call(new Date(1994, 1, 2, 3, 4, 5));
// }

// getSeason(getFullYear());
// const fakeDate = {
//   toString() {
//       return Date.prototype.toString.call(new Date());
//   },
//   [Symbol.toStringTag]: 'Date'
// };

// getSeason(fakeDate);


// getSeason(20192701); 
// getSeason({ John: 'Smith' })
// getSeason(() => new Date());
// getSeason([2019, '27', 0 + '1'])
// getSeason('foo');
// getSeason();

// getSeason(new Date(2020, 02, 31)); // => 'spring'

module.exports = {
  getSeason
};
