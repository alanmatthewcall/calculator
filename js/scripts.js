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

$(document).ready(function() {
  $("form#add").submit(function(event) {
    event.preventDefault();
    const number1 = parseInt($("#add1").val());
    const number2 = parseInt($("#add2").val());
    const result = add(number1, number2);
    const flavor = $("input:radio[name=flavor]:checked").val();
    
    $("#output").text(result);
  });
});

