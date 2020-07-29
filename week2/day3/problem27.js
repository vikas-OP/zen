//Write a function `powersOfTwo` which will return list of all powers of 2 from 0 to n (where n is an exponent).
function powersOfTwo(n) {
  let res = [];
  let start = 0;
  while (start <= n) {
    res.push(Math.pow(2, start));
    start++;
  }
  return res.join(",");
}
console.log(powersOfTwo(0));
console.log(powersOfTwo(1));
console.log(powersOfTwo(2));
