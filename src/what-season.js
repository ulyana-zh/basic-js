const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  //throw new CustomError('Not implemented');
  
  if(date === undefined) return 'Unable to determine the time of year!';
  if ( isNaN( date.getTime() ) ) return 'Error';
  switch(date.getMonth()) {
    case 11:
      case 0:
        case 1: 
          return 'winter';
          break;
          case 2:
            case 3:
              case 4:
                return 'spring';
                break;
          case 5: 
            case 6:
              case 7:
                return 'summer';
                break;
                case 8:
                  case 9:
                    case 10:
                      return 'autumn';   
                      break;
  }
};
