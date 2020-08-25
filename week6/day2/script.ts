type Breed = "dog" | "cat" | "parrot" | "goldfish";

//petshop class
class PetShop {
  name: string;
  availablePets: Pet[];
  requestedPets: Pet[];
  availability: Available;
  requested: Requested;
  constructor(name: string) {
    this.name = name;
    this.availability = new Available();
    this.requested = new Requested();
  }
  //for updating available pets
  setAvailable = (arr: Pet[]) => {
    this.availability.insert(arr);
  };
  //for updating requested pets
  setRequested = (arr: Pet[]) => {
    this.requested.insert(arr);
  };
  //private method used in other class functions
  private comparePets = (pet1: Pet, pet2: Pet) => {
    if (pet1.breed === pet2.breed && pet1.color === pet2.color) {
      return true;
    }
    return false;
  };
  //to see if the requested pets are available or not
  findStatus = () => {
    this.requestedPets = this.requested.getRequested();
    this.requestedPets = this.requestedPets.slice(0, 5);
    this.availablePets = this.availability.getAvailable();
    let status = [];
    for (let i of this.requestedPets) {
      let flag = 0;
      for (let j of this.availablePets) {
        if (this.comparePets(i, j)) {
          status.push("available");
          flag = 1;
          break;
        }
      }
      if (flag === 0) {
        status.push("not available");
      }
    }
    return status;
  };
  //to get count of different kinds of pets
  countKinds = () => {
    this.availablePets = this.availability.getAvailable();
    let obj = {};
    for (let i of this.availablePets) {
      if (obj[i.breed] === undefined) {
        obj[i.breed] = 1;
      } else {
        obj[i.breed]++;
      }
    }
    let str = "";
    for (let i in obj) {
      str += `${i} - ${obj[i]} || `;
    }
    str = str.slice(0, str.length - 4);
    return str;
  };
  //to match requested pets with available pets
  matchData = () => {
    this.availablePets = this.availability.getAvailable();
    this.requestedPets = this.requested.getRequested();
    let countArr = [];
    for (let i of this.requestedPets) {
      let count = 0;
      for (let j of this.availablePets) {
        if (this.comparePets(i, j)) {
          count++;
        }
      }
      countArr.push(count);
    }
    let str = "";
    let start = 0;
    for (let i of this.requestedPets) {
      str += `${i.toString()} - ${countArr[start]}\n`;
      start++;
    }
    return str;
  };
}

//pet class
class Pet {
  breed: Breed;
  color: string;
  constructor(breed: Breed = "dog", color: string = "brown") {
    this.breed = breed;
    this.color = color;
  }
  toString = () => {
    return `Breed - ${this.breed} & color - ${this.color}`;
  };
}

//available class
class Available {
  private available: Pet[];
  constructor() {
    this.available = [];
  }
  insert = (arr: Pet[]) => {
    this.available.push(...arr);
  };
  getAvailable = () => {
    return this.available;
  };
}

//requested class
class Requested {
  private requested: Pet[];
  constructor() {
    this.requested = [];
  }
  insert = (arr: Pet[]) => {
    this.requested.push(...arr);
  };
  getRequested = () => {
    return this.requested;
  };
}
let pet1 = new Pet("dog", "brown");
let pet2 = new Pet("cat", "white");
let pet3 = new Pet("parrot", "yellow");
let pet4 = new Pet("goldfish", "gold");
let pet5 = new Pet("dog", "black");
let pet6 = new Pet("cat", "black");
let pet7 = new Pet("parrot", "green");
let pet8 = new Pet("goldfish", "yellow");
let pet9 = new Pet("dog", "beige");
let petShop = new PetShop("The Best Shop");
petShop.setRequested([pet1, pet3, pet4, pet5, pet9, pet6, pet8, pet9]);
petShop.setAvailable([
  pet1,
  pet1,
  pet1,
  pet1,
  pet2,
  pet3,
  pet4,
  pet5,
  pet6,
  pet7,
  pet8,
  pet1,
  pet3,
  pet5,
  pet7,
]);
console.log(petShop.findStatus());
console.log(petShop.countKinds());
console.log(petShop.matchData());
