const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
 class DepthCalculator {
  calculateDepth(arr, count = 0, maxDepth = 0) {
    if (Array.isArray(arr)){
    count++
    } else {return 0}
    maxDepth = (count > maxDepth) ? count : maxDepth;
    arr.forEach((item) => {
      maxDepth = Array.isArray(item) ? this.calculateDepth(item, count, maxDepth) : maxDepth;
    })
    return maxDepth
  }
}

module.exports = {
  DepthCalculator
};
