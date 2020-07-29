//Print the first 100 prime numbers

printPrimes(100);
// Function prints the first nPrimes numbers
function printPrimes(nPrimes) {
  var n = 0;
  var i = 2;

  while (n < nPrimes) {
    if (isPrime(i)) {
      console.log(n, " → ", i);
      n++;
    }
    i++;
  }
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
