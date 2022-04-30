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

  //Run-length encoding----------------------------------------------------------
 // Start("WWWWWWWWWWWWBWWWWWWWWWWWWBBBWWWWWWWWWWWWWWWWWWWWWWWWBWWWWWWWWWWWWWW")
  // [[12,'W'],[1,'B'],[12,'W'],[3,'B'],[24,'W'],[1,'B'],[14,'W']]
/*function Start (str){

    let count = 1;
    let newArray = [];
    let counterOfArray = 0;
    str = str.split('');
    console.log(str)
    str.forEach(function callback(element, index, array) {
      if (str[index] === str[index+1]){
        count++
      } else {newArray[counterOfArray]= [+count, String(str[index])]; count = 1; counterOfArray++}
    });
    console.log(newArray)
    return newArray 
  }*/