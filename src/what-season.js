module.exports = function getSeason(date) {
    if (date === undefined) {
      return 'Unable to determine the time of year!';
    }  
    let monat = date.getMonth();
    if(!(date instanceof Date && !isNaN(date.valueOf()))) throw Error;
    if (monat >= 2 && monat <= 4) {return 'spring'}
    else if (monat >= 5 && monat <= 7) return 'summer';
    else if (monat >= 8 && monat <= 10) return 'autumn';
    else return 'winter';
  }
