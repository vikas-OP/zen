//petshop class
var PetShop = /** @class */ (function () {
    function PetShop(name) {
        var _this = this;
        //for updating available pets
        this.setAvailable = function (arr) {
            _this.availability.insert(arr);
        };
        //for updating requested pets
        this.setRequested = function (arr) {
            _this.requested.insert(arr);
        };
        //private method used in other class functions
        this.comparePets = function (pet1, pet2) {
            if (pet1.breed === pet2.breed && pet1.color === pet2.color) {
                return true;
            }
            return false;
        };
        //to see if the requested pets are available or not
        this.findStatus = function () {
            _this.requestedPets = _this.requested.getRequested();
            _this.requestedPets = _this.requestedPets.slice(0, 5);
            _this.availablePets = _this.availability.getAvailable();
            var status = [];
            for (var _i = 0, _a = _this.requestedPets; _i < _a.length; _i++) {
                var i = _a[_i];
                var flag = 0;
                for (var _b = 0, _c = _this.availablePets; _b < _c.length; _b++) {
                    var j = _c[_b];
                    if (_this.comparePets(i, j)) {
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
        this.countKinds = function () {
            _this.availablePets = _this.availability.getAvailable();
            var obj = {};
            for (var _i = 0, _a = _this.availablePets; _i < _a.length; _i++) {
                var i = _a[_i];
                if (obj[i.breed] === undefined) {
                    obj[i.breed] = 1;
                }
                else {
                    obj[i.breed]++;
                }
            }
            var str = "";
            for (var i in obj) {
                str += i + " - " + obj[i] + " || ";
            }
            str = str.slice(0, str.length - 4);
            return str;
        };
        //to match requested pets with available pets
        this.matchData = function () {
            _this.availablePets = _this.availability.getAvailable();
            _this.requestedPets = _this.requested.getRequested();
            var countArr = [];
            for (var _i = 0, _a = _this.requestedPets; _i < _a.length; _i++) {
                var i = _a[_i];
                var count = 0;
                for (var _b = 0, _c = _this.availablePets; _b < _c.length; _b++) {
                    var j = _c[_b];
                    if (_this.comparePets(i, j)) {
                        count++;
                    }
                }
                countArr.push(count);
            }
            var str = "";
            var start = 0;
            for (var _d = 0, _e = _this.requestedPets; _d < _e.length; _d++) {
                var i = _e[_d];
                str += i.toString() + " - " + countArr[start] + "\n";
                start++;
            }
            return str;
        };
        this.name = name;
        this.availability = new Available();
        this.requested = new Requested();
    }
    return PetShop;
}());
//pet class
var Pet = /** @class */ (function () {
    function Pet(breed, color) {
        var _this = this;
        if (breed === void 0) { breed = "dog"; }
        if (color === void 0) { color = "brown"; }
        this.toString = function () {
            return "Breed - " + _this.breed + " & color - " + _this.color;
        };
        this.breed = breed;
        this.color = color;
    }
    return Pet;
}());
//available class
var Available = /** @class */ (function () {
    function Available() {
        var _this = this;
        this.insert = function (arr) {
            var _a;
            (_a = _this.available).push.apply(_a, arr);
        };
        this.getAvailable = function () {
            return _this.available;
        };
        this.available = [];
    }
    return Available;
}());
//requested class
var Requested = /** @class */ (function () {
    function Requested() {
        var _this = this;
        this.insert = function (arr) {
            var _a;
            (_a = _this.requested).push.apply(_a, arr);
        };
        this.getRequested = function () {
            return _this.requested;
        };
        this.requested = [];
    }
    return Requested;
}());
var pet1 = new Pet("dog", "brown");
var pet2 = new Pet("cat", "white");
var pet3 = new Pet("parrot", "yellow");
var pet4 = new Pet("goldfish", "gold");
var pet5 = new Pet("dog", "black");
var pet6 = new Pet("cat", "black");
var pet7 = new Pet("parrot", "green");
var pet8 = new Pet("goldfish", "yellow");
var pet9 = new Pet("dog", "beige");
var petShop = new PetShop("The Best Shop");
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
