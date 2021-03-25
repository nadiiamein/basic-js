const CustomError = require("../extensions/custom-error");

module.exports = function repeater( str, options ) {
    if(typeof str != 'string') 
    {
    str = String(str);
  }
  let res = [];
  let addRes = [];

  if(!options.separator) {
    options.separator = "+";}

  if(options.hasOwnProperty("addition")) {
    if(typeof options.addition != 'string') {
      options.addition = String(options.addition);
    }
    if(!options.additionSeparator) {
      options.additionSeparator = "|";
    }
    for(let j = 0; j < options.additionRepeatTimes - 1; j += 1) {
      addRes.push(options.addition);
      addRes.push(options.additionSeparator);
    }
    addRes.push(options.addition);
    addRes.push(str);
    str = addRes.reverse().join('');
  }
for(let i = 0; i < options.repeatTimes - 1; i += 1) 
{
  res.push(str);
  res.push(options.separator);
}
res.push(str);
  return res.join('');
};
  