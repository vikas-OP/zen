//Write a function called “getOpposite”.
//Given a number, return its opposite

function getOpposite(num) {
  if (parseInt(num) === num) {
    return 0 - num;
  } else {
    return -1;
  }
}
console.log(getOpposite(5));
console.log(getOpposite(0));
console.log(getOpposite(-5));
console.log(getOpposite("5a"));
console.log(getOpposite(5.5));
