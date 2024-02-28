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

// const PersonProto = {
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   },
//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// const steven = Object.create(PersonProto);
// steven.init('Steven', 1991);
// console.log(steven);

// //Lesson 218: Coding challenge #2

// class CarCl {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }
//   accelerate() {
//     console.log(`${this.make} gained speed: ${this.speed + 10}km/h`);
//   }

//   brake() {
//     console.log(`${this.make} lost speed: ${this.speed - 5}km/h`);
//   }
//   get speedUS() {
//     return this.speed / 1.6;
//   }
//   set speedUS(speed) {
//     this.speed = speed * 1.6;
//   }
// }

// const ford = new CarCl('Ford', 120);
// console.log(ford.speedUS);
// ford.speedUS = 50;
// console.log(ford);

//Lesson 219: Inheritance between "Classes": Constructor Functions

// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };

// const Student = function (firstName, birthYear, course) {
//   Person.call(this, firstName, birthYear);
//   this.course = course;
// };

// //Linking prototypes
// Student.prototype = Object.create(Person.prototype);

// Student.prototype.introduce = function () {
//   console.log(`My name is ${this.firstName} and I study ${this.course}`);
// };

// Student.prototype.constructor = Student;

// const mike = new Student('Mike', 2020, 'Computer Science');

// mike.introduce();
// mike.calcAge();

// console.log(mike.__proto__); //Student
// console.log(mike.__proto__.__proto__); //Person
// console.log(mike instanceof Student); //true
// console.log(mike instanceof Person); //true
// console.log(mike instanceof Object); //true

// //Lesson Coding challenge #3

// class EVCl extends CarCl {
//   #charge;
//   constructor(make, speed, charge) {
//     super(make, speed);
//     this.#charge = charge;
//   }
//   chargeBattery(chargeTo) {
//     this.#charge = chargeTo;
//     return this;
//   }
//   accelerate() {
//     this.speed += 20;
//     this.#charge--;
//     console.log(
//       `${this.make} is going at ${this.speed} km/h, with a charge of ${
//         this.#charge
//       }`
//     );
//     return this;
//   }
// }

// const tesla = new EVCl('Tesla', 120, 23);
// tesla.accelerate().chargeBattery(90).accelerate();

//Lesson 220: Inheritance between "Classes": ES6 Classes

// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }
// }

// class StudentCl extends PersonCl {
//   course;
//   constructor(fullName, birthYear, course) {
//     super(fullName, birthYear);
//     this.course = course;
//   }
//   introduce() {
//     console.log(`My name is ${this.fullName} and I study ${this.course}`);
//   }
// }

// const martha = new StudentCl('Martha Jones', 2012, 'Computer Science');
// martha.introduce();
// martha.calcAge();

//Lesson 221: Inheritance between "Classes": Object.create

// const PersonProto = {
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   },http://127.0.0.1:5500/
//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// const steven = Object.create(PersonProto);
// const StudentProto = Object.create(PersonProto);
// StudentProto.init = function (firstName, birthYear, course) {
//   PersonProto.init.call(this, firstName, birthYear);
//   this.course = course;
// };

// StudentProto.introduce = function () {
//   console.log(`My name is ${this.firstName} and I study ${this.course}`);
// };

// const jay = Object.create(StudentProto);
// jay.init('Jay', 2010, 'Computer Science');
// jay.introduce();
// jay.calcAge();

// //Lesson 222 - 225: Another class example

class Account {
  locale = navigator.language; // public field(instance)
  #movements = []; //private field
  #pin;//private field
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
  }
  getMovements() {
    return this.#movements;
  }
  deposit(val) {
    this.#movements.push(val);
    return this;
  }
  withdraw(val) {
    this.deposit(-val);
    return this;
  }
  _approveLoan(val) {
    return true;
  }
  requestLoan(val) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log('Loan approved');
      return this;
    }
  }
}

class CheckingAccount extends Account {
  constructor(owner, currency, pin, interestRate) {
    super(owner, currency, pin);
    this.interestRate = interestRate;
  }
  _approveLoan(val) {
    return val < this.interestRate * this.getBalance();
  }
}

const acc1 = new CheckingAccount('Jonas', 'EUR', 1111, 0.1);
acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);
console.log(acc1);
console.log(acc1.getMovements());


//Lesson 226: Chaining methods
acc1.deposit(500).deposit(500).withdraw(400)

//Coding Challenge #4
// already done in challenge 3
