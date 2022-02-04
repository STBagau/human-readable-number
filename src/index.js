module.exports = function toReadable (number) {
   
    let numberString = String(number);
    let i = numberString.length;
    let firstNumber = '';
    let secondNumber = '';
    let thirdNumber = '';
    let result = '';
    
        switch (numberString[i - 3]) {
            case '1':
                firstNumber = 'one hundred ';
                break;
            case '2':
                firstNumber = 'two hundred ';
                break;
            case '3':
                firstNumber = 'three hundred ';
                break;
            case '4':
                firstNumber = 'four hundred ';
                break;
            case '5':
                firstNumber = 'five hundred ';
                break;
            case '6':
                firstNumber = 'six hundred ';
                break;
            case '7':
                firstNumber = 'seven hundred ';
                break;
            case '8':
                firstNumber = 'eight hundred ';
                break;
            case '9':
                firstNumber = 'nine hundred ';
                break;
            default:
                break;

        }    
    
        switch (numberString[i - 2]) {
            
            case '0':
                secondNumber = '';
                break;
            case '1':
                switch (numberString[i - 1]) {
                    case '0':
                        secondNumber = 'ten';
                        break;
                    case '1':
                        secondNumber = 'eleven';
                        break;
                    case '2':
                        secondNumber = 'twelve';
                        break;
                    case '3':
                        secondNumber = 'thirteen';
                        break;
                    case '4':
                        secondNumber = 'fourteen';
                        break;
                    case '5':
                        secondNumber = 'fifteen';
                        break;
                    case '6':
                        secondNumber = 'sixteen';
                        break;
                    case '7':
                        secondNumber = 'seventeen';
                        break;
                    case '8':
                        secondNumber = 'eighteen';
                        break;
                    case '9':
                        secondNumber = 'nineteen';
                        break;
                    default:
                        break;
                };
                break;
            case '2':
                secondNumber = 'twenty ';
                break;
            case '3':
                secondNumber = 'thirty ';
                break;
            case '4':
                secondNumber = 'forty ';
                break;
            case '5':
                secondNumber = 'fifty ';
                break;
            case '6':
                secondNumber = 'sixty ';
                break;
            case '7':
                secondNumber = 'seventy ';
                break;
            case '8':
                secondNumber = 'eighty ';
                break;
            case '9':
                secondNumber = 'ninety ';
                break;
            default:
                break;

        };
    
        switch (numberString[i - 1]) {
            case '0':
                thirdNumber = 'zero';
                break;
            case '1':
                thirdNumber = 'one';
                break;
            case '2':
                thirdNumber = 'two';
                break;
            case '3':
                thirdNumber = 'three';
                break;
            case '4':
                thirdNumber = 'four';
                break;
            case '5':
                thirdNumber = 'five';
                break;
            case '6':
                thirdNumber = 'six';
                break;
            case '7':
                thirdNumber = 'seven';
                break;
            case '8':
                thirdNumber = 'eight';
                break;
            case '9':
                thirdNumber = 'nine';
                break;
            default:
                break;
        };

        switch (i) {
            case 1:
                result = `${thirdNumber}`;
                return result.trim();
            case 2:
                if (numberString[i - 2] == '1' || numberString[i - 1] == '0') {
                    result = `${secondNumber}`;
                    return result.trim();
                } else {
                    result = `${secondNumber}${thirdNumber}`;
                    return result.trim();
                };
            case 3:
                if (numberString[i - 2] == '1' || numberString[i - 1] == '0') {
                    result = `${firstNumber}${secondNumber}`;
                    return result.trim();
                } else {
                    result = `${firstNumber}${secondNumber}${thirdNumber}`;
                    return result.trim();
                };
            default:
                break;
        };




}

    