//Create a function that will merge two arrays and return the result as a new array
var ar1 = [1, 2, 3];
var ar2 = [4, 5, 6];
var ar = mergeArrays(ar1, ar2);
console.log(ar);
function mergeArrays(ar1, ar2) {
  var result = [];
  //this will add the first array to the result array
  for (let el of ar1) {
    result.push(el);
  }
  for (let el of ar2) {
    result.push(el);
  }
  //Some piece of code goes here

  return result;
}
