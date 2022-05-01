const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if ( date == false ) 
  {return 'Unable to determine the time of year!'};

  let season = "";
  if(!date) {
    return 'Invalid date!';
  }
  if(typeof(date.getMonth) != "function"){
    return 'Invalid date!'
  }
  let month = date.getMonth();
  console.log(month)
  
  if (month <= 1 || month == 11){
    season = "winter";
  }
  else if (month >= 2 && month <= 4) {
    season = "spring";
  }
  else if (month >= 5 && month <= 7) {
    season = "summer";
  }
  else if (month >= 8 && month <=10) {
    season = "autumn";
  } else {return 'Invalid date!'}
  console.log(season)
  return season
}
module.exports = {
  getSeason
};
