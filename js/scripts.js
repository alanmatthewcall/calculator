function add(number1, number2) {
	return number1 + number2;
}
function subtr(number1, number2) {
  return number1 - number2;
}
function multiply(num1, num2) {
  return num1 * num2;
}
function divide(num1, num2) {
  return num1 / num2;
}
const number1 = parseInt(prompt("Enter a number:"));
const number2 = parseInt(prompt("Enter another number:"));
const result = divide(number1, number2);
alert(result);