//Return an array, where the first element is the count of positives numbers and the //second element is sum of negative numbers.
var arr = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var ar2 = function countPositivesSumNegatives(arr) {
  let pos = 0;
  let neg = 0;
  for (let i of arr) {
    if (i > 0) {
      pos++;
    } else if (i < 0) {
      neg++;
    }
  }
  return [pos, neg];
};
console.log(ar2(arr));
