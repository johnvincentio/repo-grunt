function add (x, y) {
  return x + y;
}
function divide (x, y) {
  return x / y;
}
function multiply (x, y) {
  return x * y;
}
function subtract (x, y) {
  return x - y;
}
function test() {
	console.log("in test");
}
test();
var a1 = add (5, 25);
console.log("a1 "+a1);
var a2 = add (a1, 100);
console.log("a2 "+a2);
var a3 = divide (a2, a1);
console.log("a3 "+a3);
var a4 = multiply (a3, a1);
console.log("a4 "+a4);
var a5 = subtract (a4, 200);
console.log("a5 "+a5);