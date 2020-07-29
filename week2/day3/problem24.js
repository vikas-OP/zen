//Write a function called “removeProperty”.
//Given an object and a key, “removeProperty” removes the given key from the given object.
let obj = {
  name: "something",
  prof: "cool",
};
function removeProperty(obj, key) {
  // your code here
  delete obj[key];
  console.log(obj);
}
removeProperty(obj, "name");
