const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let copyArray;
  function makeCopyArray(arr) {
    copyArray = arr.slice();
    for (let i = 0; i <copyArray.length; i++) {
      if (copyArray[i] != -1) {
        delete copyArray[i]
      }
    }
  }
  makeCopyArray(arr)
  arr.sort( (a, b) => a - b );
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] == -1) {
        arr.splice(i, 1)
        i--;
      }
    }
    
    for (let i = 0; i < copyArray.length; i++){
      if (copyArray[i] == -1){
        arr.splice(i, 0, copyArray[i])
      }
    }
 
  return arr
}




sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180])
module.exports = {
  sortByHeight
};
