//Print odd numbers in an array
(function odd(a) {
  console.log(a.filter((val) => val % 2 != 0));
})([1, 2, 3, 4, 5, 6]);

//Convert all the strings to title caps in a string array
// (function up(a) {
//   console.log(a.map((val) => val.toUpperCase()));
// })(["foo", "bar", "baz"]);

//Sum of all numbers in an array
// (function sum(a) {
//   let b = 0;
//   console.log(a.reduce((b, a) => (b += a), 0));
// })([1, 2, 3, 4]);

//Return all the prime numbers in an array
// (function allprime(a, func) {
//   console.log(a.filter((val) => func(val)));
// })([1, 2, 3, 4, 5, 6, 7, 8], is_prime);
// function is_prime(a) {
//   let temp = 2;
//   if (a == 1) {
//     return false;
//   }
//   if (a == 2) {
//     return true;
//   }
//   while (temp <= parseInt(a / 2)) {
//     if (a % temp == 0) {
//       return false;
//     }
//     temp++;
//   }
//   return true;
// }

//Return all the palindromes in an array
// (function allpal(a, func) {
//   console.log(a.filter((val) => func(val)));
// })(["bab", "wow", "not", "great", "lalal"], is_pal);
// function is_pal(a) {
//   let temp = a.split("");
//   if (temp.toString() == temp.reverse().toString()) {
//     return true;
//   }
//   return false;
// }

//Return median of two sorted arrays of same size
// (function med(a, b) {
//   a.push(...b);
//   a.sort((a, b) => a - b);
//   console.log((a[4] + a[5]) / 2);
// })([1, 2, 3, 4, 5], [6, 7, 8, 9, 10]);

//Remove duplicates from an array
// (function dup(a) {
//   let res = [];
//   a.forEach((val) => {
//     if (res.indexOf(val) == -1) {
//       res.push(val);
//     }
//   });
//   console.log(res);
// })([1, 2, 2, 4, 5, 5, 6]);

//Rotate an array by k times and return the rotated array
// (function ror(a, times) {
//   while (times > 0) {
//     a.unshift(a.pop());
//     times--;
//   }
//   console.log(a);
// })([1, 2, 3, 4, 5], 2);
