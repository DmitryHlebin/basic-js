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
  let count = 1;
  let newArray = [];
  let counterOfArray = 0;
  str = str.split('');
  str.forEach(function callback(element, index, array) {
    if (str[index] === str[index+1]){
      count++
    } else {newArray[counterOfArray]= [+count, String(str[index])]; count = 1; counterOfArray++}
  });
  newArray = newArray.join(",").replace(/,/g, "").replace(/[1]/g, "");
  return newArray ;
}

module.exports = {
  encodeLine
};

