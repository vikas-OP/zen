//Create a function that takes a string and returns it as an integer.

function toInteger(mystr) {
  if (!isNaN(parseInt(mystr))) {
    return parseInt(mystr);
  } else {
    return -1;
  }
}
console.log(toInteger("6"));
console.log(toInteger("1000"));
console.log(toInteger("12"));
console.log(toInteger("a"));
