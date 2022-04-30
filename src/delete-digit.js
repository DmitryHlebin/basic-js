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
  n = n.toString().split('');
  let result = [];
  n.forEach(function(item, index, array) {
    let copy = n.slice();
    copy.splice(index, 1)
    result.push(copy) 
  });
  let result1 = [];
  result.forEach(function(item, index, array) {
   result1.push(item.join(""));
  });
  result1.sort( (a, b) => a - b ).reverse();
  
  console.log(result1[0]);
  return result1[0]/1;
};
 
module.exports = {
  deleteDigit
};
