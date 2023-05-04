var button = document.querySelector("button");
var input1 = document.getElementById("num1");
var input2 = document.getElementById("num2");
// function hendler(num1: number, num2: number) {
//   return num1 + num2;
// }
// button?.addEventListener("click", function() {
//   console.log(hendler(+input1.value, +input2.value));
// });
var result = function (num1, num2) { return num1 + num2; };
var hendler = function () { return console.log(result(+input1.value, +input2.value)); };
button === null || button === void 0 ? void 0 : button.addEventListener("click", hendler);
