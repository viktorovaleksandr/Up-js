// Разложить по цифрам пятизначное число и вывести в исходном порядке через пробел.

const fullNumber = prompt ("enter five-digit number", 12345);

const number1 = (fullNumber / 10000) % 10;
const number2 = (fullNumber / 1000) % 10;
const number3 = (fullNumber / 100) % 10;
const number4 = (fullNumber / 10) % 10;
const number5 = (fullNumber / 1) % 10;

alert(number1 + ' _ ' + number2 + ' _ ' + number3 + ' _ ' + number4 + ' _ ' + number5);