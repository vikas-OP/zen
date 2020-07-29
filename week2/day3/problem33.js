//Calculate the sum of numbers received in a comma delimited string
console.log(sumCSV("1.5, 2.3, 3.1, 4, 5.5, 6, 7, 8, 9, 10.9"));
function sumCSV(s) {
  // your code here
  let res = s.split(",");
  let sum = 0;
  for (let el of res) {
    sum += +el;
  }
  return sum;
}
