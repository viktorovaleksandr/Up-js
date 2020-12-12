// Разлаживает по цифрам пятизначное число и выводит в исходном порядке через пробел.

const fullNumber = prompt ("enter five-digit number", 12345);

const number1 = Math.floor(fullNumber / 10000) % 10;
const number2 = Math.floor(fullNumber / 1000) % 10;
const number3 = Math.floor(fullNumber / 100) % 10;
const number4 = Math.floor(fullNumber / 10) % 10;
const number5 = Math.floor(fullNumber / 1) % 10;

const resultScreen = number1 + ' _ ' + number2 + ' _ ' + number3 + ' _ ' + number4 + ' _ ' + number5;

alert(resultScreen);