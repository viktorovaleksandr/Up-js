// Создать скрипт для сложения, вычитания, умножения и деления двух чисел и вывода результатов.

const number1 = prompt ("enter the number 1");
const number2 = prompt ("enter the number 2");

const additions = +number1 + +number2;
const subtraction = +number1 - +number2;
const division = +number1 / +number2;
const multiplication = +number1 * +number2;

alert('Сalculation Result: ' + ('\nAdditions '+ number1 + ' + '+ number2 + ' = ') + additions + ('\nSubtraction ' + number1 + ' - '+ number2 + ' = ')+ subtraction + ('\nMultiplication '+ number1 + ' * '+ number2 + ' = ') + multiplication + ('\nDivision '+ number1 + ' / '+ number2 + ' = ') + division)