const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(diskNumber, turnsSpeed) {
  //throw new CustomError('Not implemented');
  let turnsNumber = Math.pow(2, diskNumber) - 1;
  let secondsNumber = Math.floor(turnsNumber / (turnsSpeed / 3600));
  let result = new Object();
  return result = {
    turns: turnsNumber,
    seconds: secondsNumber
  };
};
