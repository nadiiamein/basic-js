const CustomError = require("../extensions/custom-error");

let arr = [];

const chainMaker = {
  getLength() {
    return arr.length;
    
  },
  addLink(value) {
    
    if(value === null) value = 'null';
    arr.push(value);
    return this;
  },
  removeLink(position) {
  
    if(position < 1 || position > arr.length) {
      arr = [];
      throw new Error();
    }
    arr.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    // throw new CustomError('Not implemented');
    // remove line with error and write your code here
    arr = arr.reverse();
    return this;
  },
  finishChain() {
    // throw new CustomError('Not implemented');
    // remove line with error and write your code here
    let res = arr;
    arr = [];
    return '( '+ res.join(' )~~( ') +' )';
  }
};

module.exports = chainMaker;
