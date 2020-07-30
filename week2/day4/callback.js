function something(a, func) {
  let val1 = 30;
  val2 = 20;
  let b = func[a](val1, val2);
  return b;
}
let oper = [add, sub, mul];
let ans1 = something(0, oper);
let ans2 = something(1, oper);
let ans3 = something(2, oper);
console.log(ans1, ans2, ans3);
function add(a, b) {
  return a + b;
}
function sub(a, b) {
  return a - b;
}
function mul(a, b) {
  return a * b;
}
