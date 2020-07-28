const multiply = (a, b) => a * b;
const add = (a, b) => a + b;

const multiplyX = x => a => multiply(a, 2);
const addX = x => add(x, a);

const addFour = addX(4);
const multiplyTwo = multiplyX(2);
const multiplyThree = multiplyX(3);
const formula = x => addFour(multiplyThree(multiplyTwo(x)));
