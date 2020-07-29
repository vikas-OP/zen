//Frames Per Second
//Create a function that returns the number of frames shown in a given number of minutes //for a certain FPS.

function frames(num1, num2) {
  return num1 * num2 * 60;
}
console.log(frames(1, 1));
console.log(frames(10, 1));
console.log(frames(10, 25));
