class Circle {
  constructor(...args) {
    [this.radius = 1.0, this.color = "red"] = args;
  }
  get_radius = () => this.radius;
  get_color = () => this.color;
  set_radius = (radius) => (this.radius = radius);
  set_color = (color) => (this.color = color);
  to_string = () =>
    `this is a circle of radius ${this.radius}cm and is in ${this.color} color`;
  get_area = () => Math.PI * this.radius * this.radius;
}
let circ1 = new Circle();
console.log(circ1.to_string());
let circ2 = new Circle(3.0);
console.log(circ2.to_string());
let circ3 = new Circle(4.0, "blue");
console.log(circ3.to_string());
