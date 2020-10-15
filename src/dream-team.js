const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(array) {
  //throw new CustomError('Not implemented');
  if (array == undefined || array.length === 0) return false;
  let teamName = '';
  for(i=0; i<array.length; i++) {
    if(typeof array[i] === 'string') {
      array[i] = array[i].trim();
      teamName += array[i][0];
  } 
} return teamName.toUpperCase().split('').sort().join('');
}
