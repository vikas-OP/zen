// structuring html elements
let data_change_flag = 0;
let main_div = document.createElement("div");
main_div.classList.add("container", "whole");
let container_div = document.createElement("div");
container_div.classList.add("data-container");
for (let i = 0; i < 10; i++) {
  let temp = document.createElement("div");
  temp.setAttribute("class", "entry");
  let p = document.createElement("p");
  p.setAttribute("class", "h5");
  temp.append(p);
  container_div.append(temp);
}
let page_div = document.createElement("div");
page_div.setAttribute("class", "page-container");
createButton("First", "one", "btn", "btns", "big-btns");
createButton("Prev", "decrement", "btn", "btns", "big-btns");
createButton("2", "two", "btn", "btns");
createButton("3", "three", "btn", "btns");
createButton("4", "four", "btn", "btns");
createButton("5", "five", "btn", "btns");
createButton("6", "six", "btn", "btns");
createButton("7", "seven", "btn", "btns");
createButton("8", "eight", "btn", "btns");
createButton("9", "nine", "btn", "btns");
createButton("Next", "increment", "btn", "btns", "big-btns");
createButton("Last", "ten", "btn", "btns", "big-btns");
main_div.append(container_div, page_div);
document.body.append(main_div);
function createButton(text, id, class1, class2, class3) {
  let button1 = document.createElement("button");
  button1.id = id;
  button1.innerText = text;
  if (class3 === undefined) {
    button1.classList.add(class1, class2);
  } else {
    button1.classList.add(class1, class2, class3);
  }
  page_div.append(button1);
}

//   logic
// let referenceObject = {
//   one: 0,
//   two: 10,
//   three: 20,
//   four: 30,
//   five: 40,
//   six: 50,
//   seven: 60,
//   eight: 70,
//   nine: 80,
//   ten: 90,
//   increment: true,
//   decrement: false,
// };
populateData(data_change_flag);
function populateData(data_change_flag) {
  let info_space = document.querySelectorAll(".entry>p");
  let start = data_change_flag;
  for (let i = 0; i < info_space.length; i++) {
    info_space[i].innerHTML = `ID: ${info[start].id} <br/>
        Email: ${info[start].email} <br/>
        Name: ${info[start].name}`;
    start++;
  }
}
document.getElementById("one").addEventListener("click", () => {
  data_change_flag = 0;
  populateData(data_change_flag);
});
document.getElementById("two").addEventListener("click", () => {
  data_change_flag = 10;
  populateData(data_change_flag);
});
document.getElementById("three").addEventListener("click", () => {
  data_change_flag = 20;
  populateData(data_change_flag);
});
document.getElementById("four").addEventListener("click", () => {
  data_change_flag = 30;
  populateData(data_change_flag);
});
document.getElementById("five").addEventListener("click", () => {
  data_change_flag = 40;
  populateData(data_change_flag);
});
document.getElementById("six").addEventListener("click", () => {
  data_change_flag = 50;
  populateData(data_change_flag);
});
document.getElementById("seven").addEventListener("click", () => {
  data_change_flag = 60;
  populateData(data_change_flag);
});
document.getElementById("eight").addEventListener("click", () => {
  data_change_flag = 70;
  populateData(data_change_flag);
});
document.getElementById("nine").addEventListener("click", () => {
  data_change_flag = 80;
  populateData(data_change_flag);
});
document.getElementById("ten").addEventListener("click", () => {
  data_change_flag = 90;
  populateData(data_change_flag);
});
document.getElementById("decrement").addEventListener("click", () => {
  if (data_change_flag == 0) {
    alert("This is the first page!");
    return;
  }
  data_change_flag -= 10;
  populateData(data_change_flag);
});
document.getElementById("increment").addEventListener("click", () => {
  if (data_change_flag == 90) {
    alert("This is the last page!");
    return;
  }
  data_change_flag += 10;
  populateData(data_change_flag);
});
