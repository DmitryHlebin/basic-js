const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let result = {};
  let someItem;
    
  for (let key of domains) {
    someItem = '';
    key = key.split('.').reverse();

    for (let i = 0; i < key.length; i++) {
      someItem += `.${key[i]}`;
      console.log(someItem);
      result[someItem] = result[someItem] ? result[someItem] + 1 : 1;
    }
  }

  return result;
};

// getDNSStats([
//     'code.yandex.ru',
//     'music.yandex.ru',
//    'yandex.ru'
//    ])
module.exports = {
  getDNSStats
};