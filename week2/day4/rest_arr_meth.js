let fs = require("fs");
let a = JSON.parse(
  fs.readFileSync("C:/Users/Vikaas/Desktop/javascript/db1.json").toString()
).countries;
//Get the countries in asia
//a.filter((val) => val.region == "Asia").forEach((val1) => {
//  console.log(val1.name);
//});

//Get the countries with population less than 2L
// a.filter((val) => val.population < 200000).forEach((val) => {
//   console.log(val.name);
// });

//Bumpup the current population  of all the counteirs by 1L
// a.map((val) => {
//   val.population += 100000;
//   return val;
// }).forEach((val) => {
//   console.log(val.name + ":" + val.population);
// });

//convert all the names in capital
// a.map((val) => {
//   val.name = val.name.toUpperCase();
//   return val;
// }).forEach((val) => console.log(val.name));

//print follwoig details  name, capital, flag
// a.forEach((val) => console.log(val.name, val.capital, val.flag));

//Print the total population of the countries
// console.log(a.reduce((count, val) => (count += val.population), 0));

//Print the total population of the countries in asia
// console.log(
//   a
//     .filter((val) => val.region == "Asia")
//     .reduce((count, val) => (count += val.population), 0)
// );
