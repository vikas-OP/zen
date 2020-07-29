//Write a function called “getFullName”.
//Given a first and a last name, “getFullName” returns a single string with the given first and last names separated by a single space.

function getFullName(firstName, lastName) {
  // your code here
  if (firstName != undefined && firstName.length > 0 && lastName != undefined) {
    return firstName + " " + lastName;
  } else if (firstName == undefined && lastName == undefined) {
    return "";
  } else if (lastName == undefined || lastName.length == 0) {
    return firstName;
  } else if (firstName == undefined || firstName.length == 0) {
    return lastName;
  }
}
console.log(getFullName("GUVI", "GEEK"));
console.log(getFullName("GUVI"));
console.log(getFullName("", "GEEK"));
console.log(getFullName("", ""));
