const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  constructor(direct) {
    if(direct === undefined) direct = true;
    this.direct = direct;
  }
  encrypt(message, key) {
    if(!message || !key){
      throw new Error();
    }
    let arrmessage = message.toUpperCase().split('');
    let shift = key.toUpperCase().split('').map(le => this.letters.indexOf(le));


    let shiftIndex = 0;
    let res = arrmessage.map(le => {
      let position = this.letters.indexOf(le);
      if(position == -1)
      {
        return le;
      } else 
      {
        let newpos = (position + shift[shiftIndex]) % this.letters.length;
        shiftIndex = (shiftIndex + 1) % shift.length;
        return this.letters.slice(newpos, newpos + 1);
      }
    });

    if(!this.direct)
     {
      res = res.reverse();
    }

    return res.join('');
  }    
  decrypt(message, key) {
    if(!message || !key){
      throw new Error();
    }

    let arrmessage = message.toUpperCase().split('');
    let shift = key.toUpperCase().split('').map(le => this.letters.indexOf(le));


    let shiftIndex = 0;
    let res = arrmessage.map(le => {
      let position = this.letters.indexOf(le);
      if(position == -1)
      {
        return le;
      } else 
      {
        let newpos = (this.letters.length + position - shift[shiftIndex]) % this.letters.length;
        shiftIndex = (shiftIndex + 1) % shift.length;
        return this.letters.slice(newpos, newpos + 1);
      }
    });


    if(!this.direct){
      res = res.reverse();
    }
    
    return res.join('');
  }


}

module.exports = VigenereCipheringMachine;