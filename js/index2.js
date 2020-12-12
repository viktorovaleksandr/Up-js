//Cкрипт, получающий два значения и выводящий true, если значения равны, false - если нет.

const value1 = prompt ('enter values one');
const value2 = prompt ('enter values two');

const resultValue = value1 === value2;

const resultIsEqual = 'Values ' + value1 + ' Is Equal ' + 'Values ' + value2 + ':\n' + resultValue;

alert(resultIsEqual);