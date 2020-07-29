//Create a function that will return in an array the first “nPrimes” prime numbers greater than a particular number “startAt”
console.log(getPrimes(10, 100));
function getPrimes(nPrimes, startAt) {
  // your code here
  let res = [];
  let i = startAt + 1;
  let count = 0;
  while (count < nPrimes) {
    if (isPrime(i)) {
      count++;
      res.push(i);
    }
    i++;
  }
  return res;
}
// Returns true if a number is prime
function isPrime(n) {
  // your code here
  let temp = 2;
  if (n == 2) {
    return true;
  }
  while (temp <= parseInt(n / 2)) {
    if (n % temp == 0) {
      return false;
    }
    temp++;
  }
  return true;
}
