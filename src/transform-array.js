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
  if (!Array.isArray(arr))
      throw new Error("'arr' parameter must be an instance of the Array!"); 
      let copyArray = arr.slice();
      copyArray.forEach((element, index) => {
        if (copyArray[index + 1] && element === '--double-next') {
          copyArray[index] = copyArray[index + 1];
        }
        if (copyArray[index-1] &&  element === '--double-prev') {
          copyArray[index] = copyArray[index - 1];
        }
        if (copyArray[index + 1] && element === '--discard-next') {
          copyArray.splice(index, 2)
        }
        if (copyArray[index-1] && element === '--discard-prev') {
          copyArray.splice(index-1, 2)
        }
      });

  return copyArray.filter(item=>{
    return ((item !== '--double-next') &&
    (item !== '--double-prev') && 
    (item !== '--discard-next') && 
    (item !== '--discard-prev'))
  });
}

transform([1, 2, 3, '--double-next', 1337, '--double-prev', 4, 5])


module.exports = {
  transform
};
