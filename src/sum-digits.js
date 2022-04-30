const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let arrayN = Number(n).toString().split("");
  result = 0/2;
  for (let i = 0; i< arrayN.length; i++){
  result += +arrayN[i]; 
    }
  if (result >= 10) {
    arrayN = result;
    result = 0;
    arrayN = Number(arrayN).toString().split("");
    for (let i = 0; i< arrayN.length; i++){
    result += +arrayN[i]; 
  }
  
 }
 console.log(result)
 return result;
};
getSumOfDigits(333333333333333333333)
module.exports = {
  getSumOfDigits
};
