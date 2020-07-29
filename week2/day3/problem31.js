//Reverse a string
var s = reverseString("JavaScript");
console.log(s);
function reverseString(s) {
  // your code here
  return s.split("").reverse().join("");
}
