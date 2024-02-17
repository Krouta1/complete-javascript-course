'use strict';
// // Lesson 129 - Default Parameters
// const bookings = [];

// const createBooking = function (
//   flightNum,
//   numPassengers = 1,
//   price = 199 * numPassengers
// ) {
//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };

// createBooking('LH123');
// createBooking('LH123', 2, 800);
// createBooking('LH123', 5);

// // Lesson 130 - How Passing Arguments Works: Value vs. Reference

// const flight = 'LH234';
// const petr = {
//   name: 'Petr Kroutil',
//   passport: 24739479284,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = 'LH999';
//   passenger.name = 'Mr. ' + passenger.name;

//   if (passenger.passport === 24739479284) {
//     alert('Checked in');
//   } else {
//     alert('Wrong passport');
//   }
// }

// checkIn(flight, petr);
// console.log(flight);
// console.log(petr);

// // Is the same as doing...
// const flightNum = flight;
// const passenger = petr;

// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 10000000000);
// }

// newPassport(petr);
// checkIn(flight, petr);

// //passing by value (primitive types) vs passing reference (objects)

// // Lesson 131 - First-Class and Higher-Order Functions
// // Lesson 132 - Functions Accepting Callback Functions

// const oneWord = function (str) {
//     return str.replace(/ /g, '').toLowerCase();
// };

// const upperFirstWord = function (str) {
//     const [first, ...others] = str.split(' ');
//     return [first.toUpperCase(), ...others].join(' ');
// }

// // Higher-order function
// const transformer = function (str, fn) {
//     console.log(`Original string: ${str}`);
//     console.log(`Transformed string: ${fn(str)}`);
//     console.log(`Transformed by: ${fn.name}`);
// }

// transformer('JavaScript is the best!', upperFirstWord);

//Lesson 133 - Functions Returning Functions
// const greet = function (greeting) {
//     return function (name) {
//         console.log(`${greeting} ${name}`);
//     }
// }

// const greeterHey = greet('Hey');
// greeterHey('Petr');

// greet('Hello')('Petr');

// // Challenge
// const greetArr = greeting => name => console.log(`${greeting} ${name}`);

// greetArr('Hi')('Petr');

// Lesson 134 - The call and apply Methods

// const lufthansa = {
//     airline: 'Lufthansa',
//     iataCode: 'LH',
//     bookings: [],
//     // book: function () {}
//     book(flightNum, name) {
//         console.log(
//             `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
//         );
//         this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
//     },
// };

// lufthansa.book(239, 'Petr Kroutil');
// lufthansa.book(635, 'John Smith');

// const eurowings = {
//     airline: 'Eurowings',
//     iataCode: 'EW',
//     bookings: [],
// };

// const book = lufthansa.book;

// // Does NOT work
// // book(23, 'Sarah Williams');

// // Call method, first argument is the this keyword
// book.call(eurowings, 23, 'Sarah Williams');

// // Apply method, first argument is the this keyword, second argument is an array of arguments
// const flightData = [583, 'George Cooper'];
// book.apply(eurowings, flightData);

// // Call method with spread operator
// book.call(eurowings, ...flightData);

// // Lesson 135 - The bind Method
// // Does not call the function, but returns a new function with the this keyword set to the value passed in the bind method

// //this keyword is set to eurowings
// const bookEW = book.bind(eurowings);
// const bookLH = book.bind(lufthansa);

// bookEW(23, 'Steven Williams');

// const bookEW23 = book.bind(eurowings, 23);
// bookEW23('Petr Kroutil');
// bookEW23('John Smith');

// With Event Listeners

// lufthansa.planes = 300;
// lufthansa.buyPlane = function () {
//     console.log(this);
//     this.planes++;
//     console.log(this.planes);
// };

// document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// // Partial application
// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200));

// const addVAT = addTax.bind(null, 0.23); //this keyword is not important, so we pass null instead
// // addVAT = value => value + value * 0.23;
// console.log(addVAT(100));

// // Challenge
// const addTax2 = rate => value => value + value * rate;
// const addVAT2 = addTax2(0.23);
// console.log(addVAT2(100));

// Lesson 136 - Coding Challenge #1

// const poll = {
//   question: 'What is your favourite programming language?',
//   options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
//   answers: new Array(4).fill(0),

//   registerNewAnswer() {
//     const answer = Number(
//       prompt(
//         `${this.question}\n${this.options.join('\n')}\n(Write option number)`
//       )
//     );
//     console.log(answer);

//     // Register answer
//     typeof answer === 'number' &&
//       answer < this.answers.length &&
//       this.answers[answer]++;

//     this.displayResults();
//     this.displayResults('string');
//   },

//   displayResults(type = 'array') {
//     if (type === 'array') {
//       console.log(this.answers);
//     } else if (type === 'string') {
//       console.log(`Poll results are ${this.answers.join(', ')}`);
//     }
//   },
// };

// document
//   .querySelector('.poll')
//   .addEventListener('click', poll.registerNewAnswer.bind(poll));

// poll.registerNewAnswer();

//Lesson 137 - Immediately Invoked Function Expressions (IIFE)

// const runOnce = function () {
//   console.log('This will never run again');
// };

// runOnce();

// // IIFE
// (function () {
//   console.log('This will never run again');
//   const isPrivate = 23;
// })();

// (() => console.log('This will ALSO never run again'))();

// console.log(isPrivate);//isPrivate is not defined

//Lesson 138 - Closures

// const secureBooking = function () {
//   let passengerCount = 0;

//   return function () {
//     passengerCount++;
//     console.log(`${passengerCount} passengers`);
//   };
// };

// const booker = secureBooking();
// booker();
// booker();
// booker();

// console.dir(booker); //shows the closure

// More closures
// Example 1
// let f;

// const g = function () {
//     const a = 23;
//     f = function () {
//         console.log(a * 2);
//     };
// }

// const h = function () {
//     const b = 777;
//     f = function () {
//         console.log(b * 2);
//     };
// }

// g();
// f(); //46 f is closed over of g function

// // Re-assigning f function
// h();
// f(); //1554 f is closed over of h function
// console.dir(f); //value of b = 777

// // Example 2

// const boardPassengers = function (n, wait) {
//     const perGroup = n / 3;

//     setTimeout(function () {
//         console.log(`We are now boarding all ${n} passengers`);
//         console.log(`There are 3 groups, each with ${perGroup} passengers`);
//     }, wait * 1000);

//     console.log(`Will start boarding in ${wait} seconds`);
// }

// const perGroup = 1000; //does not affect the perGroup in the function
// boardPassengers(180, 3); //closure over the boardPassengers function

//Lesson 139 - Coding Challenge #2

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();
