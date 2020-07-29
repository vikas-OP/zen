//Write a function called “areBothOdd”.
//Given 2 numbers, “areBothOdd” returns whether or not both of the given numbers are odd.

function areBothOdd(num1, num2) {
  // your code here
  if (num1 % 2 != 0 && num2 % 2 != 0) {
    return true;
  }
  return false;
}
console.log(areBothOdd(1, 3));
console.log(areBothOdd(1, 4));
console.log(areBothOdd(2, 3));
console.log(areBothOdd(0, 0));
