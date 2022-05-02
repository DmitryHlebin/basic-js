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

let result = "";
let string = "";
string += str;
let add = "";
if ("addition" in options) {
    for (let i = 1; i <= (options.additionRepeatTimes || 1); i++) {
      add += options.addition;
        if (i < options.additionRepeatTimes){
          add += (options.additionSeparator || "|")
        }
    }
  }
    for (let i = 1; i <= (options.repeatTimes || 1); i++){
      result += string + add;
      if (i < (options.repeatTimes)){
        result += (options.separator || "+")
      }
    }
  console.log(result);
  return result;

}
repeater(null, { repeatTimes: 3, separator: '??? ', addition: null, additionRepeatTimes: 3, additionSeparator: '!!!' });
module.exports = {
  repeater
};
