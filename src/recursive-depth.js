const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
      let count = 1;
      let Depth = 0;
      arr.forEach ((item) => {
        if (Array.isArray (item)) {
          count = this.calculateDepth (item);
          if (Depth <count) Depth = count;
        }
      });
      return Depth + 1;
    }
};