'use strict';

//Lesson 209: Constructor function

// const Person = function(firstName,birthYear){
//     //console.log(this)
//     this.firstName = firstName
//     this.birthYear = birthYear

//     //Never  do this
//     // this.calcAge = function (){
//     //     console.log(2037-birthYear)
//     // }
// }

// const jonas = new Person('Johans',1991)

//1. new empty {} is created
//2. functions is callled, this = {}
//3. {} linked to prototype
//4.function returns {}

// const lucy = new Person('Lucy',2001)
// const matilda = new Person('Matilda',1981)
// console.log(jonas instanceof Person);

//Lesson 210: Prototypes
// Person.prototype.calcAge = function (){
//     console.log(2037-this.birthYear)
// };

// jonas.calcAge()
// matilda.calcAge()
// console.log(jonas.__proto__ === Person.prototype)
// console.log(Person.prototype.isPrototypeOf(Person))

// Person.prototype.species = 'Homo Sapiens'
// console.log(jonas.species,lucy,matilda);
// console.log(jonas.hasOwnProperty('species'));

//Lesson 212: Prototypal inheritance on Built-In objects
//Object.prototype (to of prototype chain)
// console.log(jonas.__proto__.__proto__);
// const arr = [3,6,4,5,9,3]
// console.log(arr.__proto__ === Array.prototype)
// console.log(arr.__proto__.__proto__ ) //Object.prototype

// // not a good idea but it works
// Array.prototype.unique = function (){
//    return [...new Set(this)]
// }
// console.log(arr.unique())

//Lesson 213: Coding challenge #1

// const Car = function(make, speed){
//     this.make = make
//     this.speed = speed
// }

// Car.prototype.accelerate = function (){
//     console.log(`${this.make} gained speed: ${this.speed + 10}km/h`)
// };

// Car.prototype.brake = function (){
//     console.log(`${this.make} lost speed: ${this.speed - 5}km/h`)
// };

// const bmw = new Car('BMW',120)
// const merc = new Car('Mercedes',95)

// console.log(merc.brake())

// //Lesson 214: ES6 Classes

// class PersonCl {
//     constructor(firstName,birthYear){
//         this.firstName = firstName
//         this.birthYear = birthYear
//     }
//     // you can do this cuz it is added to prototype object
//     calcAge(){
//        console.log(2037 - this.birthYear)
//     }
// }

// const petr = new PersonCl('Petr',1857)
// console.log(petr)

// //Lesson 215: Setters and Getters
// const acccount = {
//   owner: 'Jonas',
//   movements: [200, 530, 120, 300],

//   get latest() {
//     return this.movements.slice(-1).pop();
//   },
//   set latest(mov) {
//     this.movements.push(mov);
//   },
// };

// console.log(acccount.latest);

// acccount.latest = 50;
// console.log(acccount.movements);

// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }

//   get age() {
//     return 2037 - this.birthYear;
//   }
//   //Set a property that already exists
//   set fullName(name) {
//     if (name.includes(' ')) this._fullName = name;
//     else alert(`${name} is not a full name`);
//   }

//   get fullName() {
//     return this._fullName;
//   }
// }

// const petr = new PersonCl('Petr Agsahdjsa', 1857);
// console.log(petr);

//Lesson 216: Static methods

//Lesson 217: Object.create

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
steven.init('Steven', 1991);
console.log(steven);

//Lesson 218: Coding challenge #2

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelerate() {
    console.log(`${this.make} gained speed: ${this.speed + 10}km/h`);
  }

  brake() {
    console.log(`${this.make} lost speed: ${this.speed - 5}km/h`);
  }
  get speedUS() {
    return this.speed / 1.6;
  }
  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

const ford = new CarCl('Ford', 120);
console.log(ford.speedUS);
ford.speedUS = 50;
console.log(ford);

//Lesson 219: Inheritance between "Classes": Constructor Functions
