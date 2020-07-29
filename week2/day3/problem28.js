//Find the maximum number in an array of numbers
function findMax(ar) {
  // your code here
  return Math.max(...ar);
}
var ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var max = findMax(ar);
console.log("Max: ", max);
