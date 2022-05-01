const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  let result = [];
  let number = 1;
  let count;
    names.forEach(function(item, index, array) {
      if (result.indexOf(item) == -1){
        result.push(item)
      } else {
          number = 1;
          item = `${item}(${(number)})`;

          if(result.indexOf(item) != -1){
            while(result.indexOf(item) != -1){
              item = item.substring(0, item.length - 3);
              number++
              item = `${item}(${(number)})`             
            }
            result.push(item);
          } else {
            result.push(item);
          }

      }
    });
    console.log(result)
    return result
}


renameFiles(["file", "file", "image", "file(1)", "file"])
module.exports = {
  renameFiles
};
