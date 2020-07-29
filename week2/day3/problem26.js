//Create a function that receives an array of numbers and returns an array containing only the positive numbers
function getPositives(ar) {
  // your code here
  let res = [];
  for (let i of ar) {
    if (i > 0) {
      res.push(i);
    }
  }
  return res;
}
var ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var ar2 = getPositives(ar);
console.log(ar2);
