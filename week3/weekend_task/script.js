let header = document.createElement("header");
header.setAttribute("class", "h1 text-center bg-primary text-light");
header.innerText = "SIMPLE CALCULATOR";
let calc_space = document.createElement("div");
calc_space.setAttribute("class", "calc-space");
let p = document.createElement("p");
p.setAttribute("class", "calc-disp");
p.setAttribute("id", "calc-disp");
let numbers_ops = document.createElement("div");
numbers_ops.setAttribute("class", "numbers-ops");
let numbers = document.createElement("div");
numbers.setAttribute("class", "numbers");
let button1 = document.createElement("button");
button1.setAttribute("class", "digits");
button1.setAttribute("id", "seven");
button1.innerText = "7";
let button2 = document.createElement("button");
button2.setAttribute("class", "digits");
button2.setAttribute("id", "eight");
button2.innerText = "8";
let button3 = document.createElement("button");
button3.setAttribute("class", "digits");
button3.setAttribute("id", "nine");
button3.innerText = "9";
let button4 = document.createElement("button");
button4.setAttribute("class", "digits");
button4.setAttribute("id", "four");
button4.innerText = "4";
let button5 = document.createElement("button");
button5.setAttribute("class", "digits");
button5.setAttribute("id", "five");
button5.innerText = "5";
let button6 = document.createElement("button");
button6.setAttribute("class", "digits");
button6.setAttribute("id", "six");
button6.innerText = "6";
let button7 = document.createElement("button");
button7.setAttribute("class", "digits");
button7.setAttribute("id", "one");
button7.innerText = "1";
let button8 = document.createElement("button");
button8.setAttribute("class", "digits");
button8.setAttribute("id", "two");
button8.innerText = "2";
let button9 = document.createElement("button");
button9.setAttribute("class", "digits");
button9.setAttribute("id", "three");
button9.innerText = "3";
let button10 = document.createElement("button");
button10.setAttribute("class", "digits");
button10.setAttribute("id", "delete");
button10.innerText = "Delete";
let button11 = document.createElement("button");
button11.setAttribute("class", "digits");
button11.setAttribute("id", "zero");
button11.innerText = "0";
let button12 = document.createElement("button");
button12.setAttribute("class", "digits");
button12.setAttribute("id", "clear");
button12.innerText = "Clear";
let ops = document.createElement("div");
ops.setAttribute("class", "ops");
let button13 = document.createElement("button");
button13.setAttribute("class", "opes");
button13.setAttribute("id", "plus");
button13.innerText = "+";
let button14 = document.createElement("button");
button14.setAttribute("class", "opes minus");
button14.setAttribute("id", "minus");
button14.innerText = "-";
let button15 = document.createElement("button");
button15.setAttribute("class", "opes times");
button15.setAttribute("id", "times");
button15.innerText = "*";
let button16 = document.createElement("button");
button16.setAttribute("class", "opes by");
button16.setAttribute("id", "by");
button16.innerText = "/";
let button17 = document.createElement("button");
button17.setAttribute("class", "opes mod");
button17.setAttribute("id", "mod");
button17.innerText = "%";
let button18 = document.createElement("button");
button18.setAttribute("class", "opes equals");
button18.setAttribute("id", "equals");
button18.innerText = "=";
ops.append(button13, button14, button15, button16, button17, button18);
numbers.append(
  button1,
  button2,
  button3,
  button4,
  button5,
  button6,
  button7,
  button8,
  button9,
  button10,
  button11,
  button12
);
numbers_ops.append(numbers, ops);
calc_space.append(p);
document.body.append(header, calc_space, numbers_ops);

let str = "";

document.getElementById("zero").addEventListener("click", () => {
  str += 0;
  p.innerText = str;
});
document.getElementById("one").addEventListener("click", () => {
  str += 1;
  p.innerText = str;
  console.log(str);
});
document.getElementById("two").addEventListener("click", () => {
  str += 2;
  p.innerText = str;
});
document.getElementById("three").addEventListener("click", () => {
  str += 3;
  p.innerText = str;
});
document.getElementById("four").addEventListener("click", () => {
  str += 4;
  p.innerText = str;
});
document.getElementById("five").addEventListener("click", () => {
  str += 5;
  p.innerText = str;
});
document.getElementById("six").addEventListener("click", () => {
  str += 6;
  p.innerText = str;
});
document.getElementById("seven").addEventListener("click", () => {
  str += 7;
  p.innerText = str;
});
document.getElementById("eight").addEventListener("click", () => {
  str += 8;
  p.innerText = str;
});
document.getElementById("nine").addEventListener("click", () => {
  str += 9;
  p.innerText = str;
});
document.getElementById("delete").addEventListener("click", () => {
  if (str.length > 0) {
    str = str.slice(0, str.length - 1);
  }
  p.innerText = str;
});
document.getElementById("clear").addEventListener("click", () => {
  str = "";
  p.innerText = str;
});

document.getElementById("plus").addEventListener("click", () => {
  str += "+";
  p.innerText = str;
});
document.getElementById("minus").addEventListener("click", () => {
  str += "-";
  p.innerText = str;
});
document.getElementById("times").addEventListener("click", () => {
  str += "*";
  p.innerText = str;
});
document.getElementById("by").addEventListener("click", () => {
  str += "/";
  p.innerText = str;
});
document.getElementById("mod").addEventListener("click", () => {
  str += "%";
  p.innerText = str;
});
document.getElementById("equals").addEventListener("click", () => {
  str = equals(str);
});
document.addEventListener("keypress", () => {
  if (event.key == " ") {
    return;
  }
  if (
    (event.key >= 0 && event.key <= 9) ||
    event.key == "*" ||
    event.key == "+" ||
    event.key == "-" ||
    event.key == "/" ||
    event.key == "%"
  ) {
    str += event.key;
    p.innerText = str;
  }
  if (event.key == "=") {
    str = equals(str);
  }
});
function equals(str) {
  let ans = eval(str);
  p.innerText = ans;
  str = p.innerText;
  return str;
}
