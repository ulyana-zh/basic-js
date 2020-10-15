const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  //throw new CustomError('Not implemented');
  
  if (typeof sampleActivity !== 'string') return false;
  if (sampleActivity !== /[1-99999]/) return false;
  let years = (Math.log(MODERN_ACTIVITY / +sampleActivity)) / (0.693 / HALF_LIFE_PERIOD);
  return Math.ceil(years); 
};
