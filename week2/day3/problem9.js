//Less Than 100?
//Given two numbers, return true if the sum of both numbers is less than 100. Otherwise //return false.

function lessThan100(num1, num2) {
  if (num1 + num2 < 100) {
    return true;
  }
  return false;
}
console.log(lessThan100(22, 15));
console.log(lessThan100(83, 34));
