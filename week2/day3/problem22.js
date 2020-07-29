//Write a function called “getProperty”.
//Given an object and a key, “getProperty” returns the value of the property at the given //key. If there is no property at the given key, it should return undefined.
var obj = {
  mykey: "value",
};
function getProperty(obj, key) {
  // your code here
  return obj[key];
}
console.log(getProperty(obj, "mykey"));

console.log(getProperty(obj, "dummykey"));
