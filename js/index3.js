// Определяет среднее арифметическое трех чисел.

const number1 = prompt ('Enter the first number');
const number2 = prompt ('Enter the second number');
const number3 = prompt ('Enter the third number');

const average = (+number1 * +number2 * +number3) / 3;

alert('Average: ' + number1 + ' _ ' + number2 + ' _ ' + number3 + ' = ' + average);