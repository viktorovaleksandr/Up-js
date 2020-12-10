// Разложить по цифрам пятизначное число и вывести в исходном порядке через пробел.

const Fullnumber = prompt ("enter five-digit number", 12345);

const number1 = (Fullnumber / 10000) % 10;
const number2 = (Fullnumber / 1000) % 10;
const number3 = (Fullnumber / 100) % 10;
const number4 = (Fullnumber / 10) % 10;
const number5 = (Fullnumber / 1) % 10;

alert(number1 + ' _ ' + number2 + ' _ ' + number3 + ' _ ' + number4 + ' _ ' + number5);