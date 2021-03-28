const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) throw Error 
  const array = [...arr];
  for (let i = 0; i < array.length; i++) {
    let el = array[i];

    if(el === '--double-next') {
      if (typeof array[i + 1] === 'undefinded') {
        array[i] = null;
      } else {
        array[i] = array[i +1]
      }
      i -= 1
      continue;
    }
    if (el === '--double-prev') {
      if (typeof array[i - 1] === 'undefined') {
        array[i] = null
      } else{
        array[i] = array[i - 1]
      }

    }
    if (el === '--discard-next') {
      if (typeof array [i +1] === 'undefined') {
        array[i] = null 
      } else {
        array[i+ 1] = null
        array[i] = null
      }
    }
    if (el === '--discard-prev') {
      if(typeof array[i -1] === 'undefined' || array[i-1] === null) {
        array[i] = null
      } else {
        array[i -1] = null
        array[i] = null
      }
    }
  }
  return [...array.filter(el => el !=null)];
};
