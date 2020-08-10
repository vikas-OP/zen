let head = document.createElement("header");
let p1 = document.createElement("p");
let div = document.createElement("div");
div.setAttribute("class", "result-space my-5");
let p2 = document.createElement("p");
p2.setAttribute("class", "number-place h1 pt-1 text-center");
p2.setAttribute("id", "number-place");
let button = document.createElement("button");
button.setAttribute("class", "btn btn-success btnn");
button.innerText = "Generate";
p1.setAttribute("class", "display-4 text-center");
p1.innerText = "Random Number Generator";
head.append(p1);
div.append(p2);
document.body.append(head, div, button);
document.querySelector(".btnn").addEventListener("click", () => {
  p2.innerText = b();
});
let b = function getnum(a = []) {
  if (a.length === 8) {
    return a.join("");
  }
  let b = Math.random() * 10;
  b = Math.floor(b);
  if (a.indexOf(b) == -1) {
    a.push(b);
  }
  return getnum(a);
};
