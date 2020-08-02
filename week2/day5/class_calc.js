class Calculator {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }
  add = () => this.a + this.b;
  sub = () => this.a - this.b;
  mul = () => this.a * this.b;
  div = () => this.a / this.b;
  rem = () => this.a % this.b;
}
let calc = new Calculator(10, 2);
console.log(calc.add());
console.log(calc.sub());
console.log(calc.mul());
console.log(calc.div());
console.log(calc.rem());
