const button = document.querySelector("button");
const input1 = document.getElementById("num1")! as HTMLInputElement;
const input2 = document.getElementById("num2")! as HTMLInputElement;

// function hendler(num1: number, num2: number) {
//   return num1 + num2;
// }

// button?.addEventListener("click", function() {
//   console.log(hendler(+input1.value, +input2.value));
// });


const result = (num1:number, num2:number) => num1 + num2;

const hendler=()=>console.log(result(+input1.value , +input2.value))

button?.addEventListener("click",hendler)