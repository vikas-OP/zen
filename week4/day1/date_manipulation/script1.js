let head = document.createElement("header");
let p1 = document.createElement("p");
p1.setAttribute(
  "class",
  "display-4 text-center text-primary bg-danger py-2 pb-4"
);
head.append(p1);
let main_div = document.createElement("div");
main_div.setAttribute("class", "main mt-5 bg-dark text-white");
let p2 = document.createElement("p");
p2.setAttribute("class", "h1 text-center");
p2.innerText = "Enter your Date of Birth";
let div = document.createElement("div");
div.setAttribute("class", "buttons mt-2");
let label1 = document.createElement("label");
label1.setAttribute("for", "date");
label1.innerText = "Date(xx): ";
let label2 = document.createElement("label");
label2.setAttribute("for", "month");
label2.innerText = "Month(xx): ";
let label3 = document.createElement("label");
label3.setAttribute("for", "year");
label3.innerText = "Year(xxxx): ";
let input1 = document.createElement("input");
input1.setAttribute("type", "number");
input1.setAttribute("id", "date");
let input2 = document.createElement("input");
input2.setAttribute("type", "number");
input2.setAttribute("id", "month");
let input3 = document.createElement("input");
input3.setAttribute("type", "number");
input3.setAttribute("id", "year");
div.append(label1, input1, label2, input2, label3, input3);
let button = document.createElement("button");
button.setAttribute("class", "btn btn-primary mt-4 gen");
button.innerText = "Generate";
let p = document.createElement("p");
p.setAttribute("class", "h6 bg-warning mt-3 mx-5 px-5 text-space");
p1.innerText = "Date Manipulation";
main_div.append(p2, div, button, p);
document.body.append(head, main_div);
let current = new Date();
document.querySelector("button").addEventListener("click", () => {
  let date = document.getElementById("date").value;
  let month = document.getElementById("month").value;
  let year = document.getElementById("year").value;
  let dob = new Date(+year, +month - 1, +date);
  console.log(dob.getMonth());
  p.innerText = add(dob, current);
});
function add(dob, current) {
  let d = Math.floor((current - dob) / (1000 * 60 * 60 * 24));
  let y = Math.floor(current.getYear() - dob.getYear());
  let m = Math.floor(d / 30);
  let ms = current - dob;
  let s = Math.floor(ms / 1000);
  let mi = Math.floor(s / 60);
  let str = `Day count - ${d} days,
Year Difference - ${y} years,
Month Difference - ${m} months,
Minutes Difference - ${mi} minutes,
Seconds Difference - ${s} seconds, 
Milliseconds Difference - ${ms} milliseconds 
`;
  console.log(str);
  return str;
}
