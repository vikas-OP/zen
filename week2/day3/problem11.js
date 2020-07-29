//Old macdonald had a farm:
//MacDonald is asking you to tell him how many legs can be counted among all his animals. The farmer breeds three species:
//turkey = 2 legs
//horse = 4 legs
//pigs = 4 legs
//The farmer has counted his animals and he gives you a subtotal for each species. You have to implement a function that returns the total number of legs of all the animals.

function CountAnimals(tur, horse, pigs) {
  return 2 * tur + 4 * horse + 4 * pigs;
}
console.log(CountAnimals(2, 3, 5));
console.log(CountAnimals(1, 2, 3));
console.log(CountAnimals(5, 2, 8));
