// 1.
// var cat = {
//   name: "Fluffy",
//   activities: ["play", "eat cat food"],
//   catFriends: [
//     {
//       name: "bar",
//       activities: ["be grumpy", "eat bread omblet"],
//       weight: 8,
//       furcolor: "white",
//     },
//     {
//       name: "foo",
//       activities: ["sleep", "pre-sleep naps"],
//       weight: 3,
//     },
//   ],
// };

// //Add height and weight to Fluffy
// cat.weight = 5;
// cat.height = 3;

// //Fluffy name is spelled wrongly. Update it to Fluffyy
// cat.name = "Fluffyy";

//List all the activities of Fluffyy’s catFriends.
//for (i in cat.catFriends) {
//  console.log(cat.catFriends[i].activities);
//}

//Print the catFriends names.
//for (i in cat.catFriends) {
//  console.log(cat.catFriends[i].name);
//}

//Print the total weight of catFriends
// let total_weight = 0;
// for (i in cat.catFriends) {
//   total_weight += cat.catFriends[i].weight;
// }
// console.log(total_weight);

//Print the total activities of all cats (op:6)
// let arr = [];
// arr.push(...cat.activities);
// for (i in cat.catFriends) {
//   arr.push(...cat.catFriends[i].activities);
// }
// console.log(arr.join(","));

//Add 2 more activities to bar & foo cats
// for (let i in cat.catFriends) {
//   cat.catFriends[i].activities.push("activity 1", "activity 2");
// }
// console.log(cat.catFriends);

//Update the fur color of bar
// for (let i in cat.catFriends) {
//   if (cat.catFriends[i].name == "bar") {
//     cat.catFriends[i].furcolor = "brown";
//     break;
//   }
// }
// console.log(cat.catFriends[0]);

// var myCar = {
//   make: "Bugatti",
//   model: "Bugatti La Voiture Noire",
//   year: 2019,
//   accidents: [
//     {
//       date: "3/15/2019",
//       damage_points: "5000",
//       atFaultForAccident: true,
//     },
//     {
//       date: "7/4/2022",
//       damage_points: "2200",
//       atFaultForAccident: true,
//     },
//     {
//       date: "6/22/2021",
//       damage_points: "7900",
//       atFaultForAccident: true,
//     },
//   ],
// };

//1. Loop over the accidents array. Change atFaultForAccident from true to false.
// for (i in myCar.accidents) {
//   myCar.accidents[i].atFaultForAccident = false;
// }
// console.log(myCar.accidents);

//2. Print the dated of my accidents
// let result = [];
// for (i in myCar.accidents) {
//   result.push(myCar.accidents[i].date);
// }
// console.log(result.join(","));

//Write a function called “printAllValues” which returns an newArray of all the input object’s values.

//var obj = { name: "RajiniKanth", age: 33, hasPets: false };
// function printAllValues(obj) {
//   // your code here
//   return Object.values(obj);
// }
// console.log(printAllValues(obj));

//Write a function called “printAllKeys” which returns an newArray of all the input object’s keys.
// function printAllKeys(obj) {
//   return Object.keys(obj);
// }
// console.log(printAllKeys(obj));

// Write a function called “convertObjectToList” which converts an object literal into an array of arrays.
// var obj = { name: "ISRO", age: 35, role: "Scientist" };
// function convertListToObject(obj) {
//   // your code here
//   let result = [];
//   for (let i in obj) {
//     result.push([i, obj[i]]);
//   }
//   return result;
// }
// console.log(convertListToObject(obj));

//Write a function ‘transformFirstAndLast’ that takes in an array, and returns an object with:
//1) the first element of the array as the object’s key, and
//2) the last element of the array as that key’s value.
// var arr = ["GUVI", "I", "am", "a geek"];
// function transformFirstAndLast(arr) {
//   let newObject = {};
//   newObject[arr[0]] = arr[arr.length - 1];
//   return newObject;
// }
// console.log(transformFirstAndLast(arr));

// Write a function “fromListToObject” which takes in an array of arrays, and returns an object with each pair of elements in the array as a key-value pair.
// var arr = [
//   ["make", "Ford"],
//   ["model", "Mustang"],
//   ["year", 1964],
// ];
// function fromListToObject(arr) {
//   var newObject = {};
//   for (let i in arr) {
//     newObject[arr[i][0]] = arr[i][1];
//   }
//   return newObject;
// }
// console.log(fromListToObject(arr));

//Write a function called “transformGeekData” that transforms some set of data from one format to another.
// var arr = [
//   [
//     ["firstName", "Vasanth"],
//     ["lastName", "Raja"],
//     ["age", 24],
//     ["role", "JSWizard"],
//   ],
//   [
//     ["firstName", "Sri"],
//     ["lastName", "Devi"],
//     ["age", 28],
//     ["role", "Coder"],
//   ],
// ];
// function transformEmployeeData(arr) {
//   var arr1 = [];
//   for (let i in arr) {
//     let obj = {};
//     for (let j in arr[i]) {
//       obj[arr[i][j][0]] = arr[i][j][1];
//     }
//     arr1.push(obj);
//   }

//   return arr1;
// }
// console.log(transformEmployeeData(arr));

// Parsing two JSON objects and Compare:
// var expected = { foo: 5, bar: 6 };
// var actual = { foo: 6, bar: 5 };
// function assertObjectsEqual(actual, expected, testName) {
//   // your code here
//   if (JSON.stringify(expected) == JSON.stringify(actual)) {
//     return "Passed";
//   } else {
//     return `Failed ${testName} Expected ${JSON.stringify(
//       expected
//     )}, but got ${JSON.stringify(actual)}`;
//   }
// }
// console.log(
//   assertObjectsEqual(actual, expected, "detects that two objects are equal")
// );

//Parsing JSON objects and Compare:
// var securityQuestions = [
//   {
//     question: "What was your first pet’s name?",
//     expectedAnswer: "FlufferNutter",
//   },
//   {
//     question: "What was the model year of your first car?",
//     expectedAnswer: "1985",
//   },
//   {
//     question: "What city were you born in?",
//     expectedAnswer: "NYC",
//   },
// ];
// function chksecurityQuestions(securityQuestions, question, answer) {
//   // your code here
//   for (let i in securityQuestions) {
//     if (
//       securityQuestions[i].question == question &&
//       securityQuestions[i].expectedAnswer == answer
//     ) {
//       return true;
//     }
//   }
//   return false;
// }
// // var ques = "What was your first pet’s name?";
// // var ans = "FlufferNutter";
// var ques = "What was your first pet’s name?";
// var ans = "DufferNutter";
// var status = chksecurityQuestions(securityQuestions, ques, ans);
// console.log(status);

//Write a function to return the list of characters below 20 age
// var students = [
//   {
//     name: "Siddharth Abhimanyu",
//     age: 21,
//   },
//   { name: "Malar", age: 25 },
//   { name: "Maari", age: 18 },
//   { name: "Bhallala Deva", age: 17 },
//   { name: "Baahubali", age: 16 },
//   { name: "AAK chandran", age: 23 },
//   { name: "Gabbar Singh", age: 33 },
//   { name: "Mogambo", age: 53 },
//   { name: "Munnabhai", age: 40 },
//   { name: "Sher Khan", age: 20 },
//   { name: "Chulbul Pandey", age: 19 },
//   { name: "Anthony", age: 28 },
//   { name: "Devdas", age: 56 },
// ];
// function returnMinors(arr) {
//   let result = [];
//   for (let i in arr) {
//     if (arr[i].age < 20) {
//       result.push(arr[i].name);
//     }
//   }
//   return result;
// }
// console.log(returnMinors(students));
