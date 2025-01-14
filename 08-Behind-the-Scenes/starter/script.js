'use strict';

// // Lesson 93 - Scoping in Practice

// function calcAge(birthYear){ // this is in global scope
//     const age = 2037  - birthYear // this is in fucn scope
//     //console.log(firstName) // can do this coz first name is in global scope(variable look up)
//     function printAge(){
//         let output = `${firstName}, you are ${age}, born in ${birthYear}.`
//         console.log(output)
//         // this also work cuz of scope chain and variable look up
//         if(birthYear >= 1981 && birthYear<=1996){
//             var millenial = true
//             const firstName = 'John' // lookin to current scope not above, breaking the scope chain. No problem that name is repeating coz the variables are in diff scopes
//             const string = `Oh, and you're a millenial ${firstName}.`
//             console.log(string)

//             function add(a,b){
//                 return a + b
//             }

//             output = 'NEW OUTPUT' // manipulated variable in aprent scope
//         }
//         //console.log(string) // Ref error
//         console.log(millenial) // var is function scoped, it's ignoring IF block
//         //console.log(add(2,3)) // in scrtict mode functions are block scoped, so ref error
//         console.log(output)
//     }
//     printAge()
//     return age
// }

// const firstName = 'Petr'
// calcAge(1991)
// //console.log(age) // Ref error i can look down in scopes, only look up to parent
// //printAge() // Ref error

// // Lesson 94 - Hoisting and TDZ in Practice
// // FOR VARIABLES
// console.log(me)// hoisted to undef
// console.log(job) //error it is in TDZ (temporal dead zone)
// console.log(year) //error it is in TDZ

// var me = 'Petr'
// let job = 'teacher'
// const year = 1991

// //FOR FUNCTIONS

// console.log(addDecl(2,3)) // result 5
// console.log(addExp(2,3)) //error it is in TDZ, cuz func exp is variable
// console.log(addArrow(2,3)) //error it is in TDZ

// function addDecl(a,b){
//     return a + b;
// }

// var addExp = function (a,b){ // if you replace const with var, it will be hoisted but undefined(2,3) is not function so error anyways
//     return a + b;
// }

// const addArrow = (a,b) => a +b ;

// //Example

// if(!numProducts) deleteShoppingCart(); // cuz of hoisting at this place numProducts = undef, thats why this line executes.VERY DANGEROUS! Solution is simple don't use var

// var numProducts = 10;

// function deleteShoppingCart(){
//     console.log('All products deleted')
// }

// // var is defined property in window OBJ, let and const not
// var x = 1;
// var y = 2;
// const z = 3;

// // Lesson 97 - this keywod in Practice

// console.log(this); // window obj

// const calcAge = function(birthYear){
//     console.log(2037 - birthYear);
//     console.log(this); // undefined
// }
// //calcAge(1991)

// const calcAgeArrow = birthYear => {
//     console.log(2037 - birthYear);
//     console.log(this); //points to window obj, cuz parent is window
// }
// //calcAgeArrow(1991)

// const petr = {
//     year : 1991,
//     calcAge: function(){
//         console.log(this); // petr obj
//         console.log(2037 - this.year);
//     }
// }

// petr.calcAge() // calcAge point to obj that is calling it not the obj wich is written in
// const matilda = {
//     year : 1997
// }
// matilda.calcAge = petr.calcAge
// matilda.calcAge()

// const f = petr.calcAge;
// f();// this keyword is undef

// // Lesson 97 - Regular Func vs Arrow Func
// var firstName = 'Matilda'// this is problem with the arrow func in jonas obj. Simply dont use var

// const jonas = {
//     firstName : 'Jonas',
//     year : 1991,
//     calcAge: function () {
//         console.log(2037 - this.year)

//         //function inside method
//         // const self = this; // solution to this problem with jonas.calcAge()
//         // const isMillenial = function (){
//         //     console.log(this.year >=1981 && this.year<=1996)
//         // }
//         //solution 2 coz arrow use this keyword from parent wiich is calcAge func
//         const isMillenial = () => {
//             console.log(this.year >=1981 && this.year<=1996)
//         }
//         isMillenial()
//     },

//     greet: () => console.log(`hey ${this.firstName}`) // never use arrow function as method (inside object) !

// }

// jonas.greet()// Hey undefined,obj is not code block so parent of this func is window
// jonas.calcAge() // year is undefined

// //arguments keyword
// const addExpr = function (a,b){
//     console.log(arguments)
//     return a + b;
// }
// addExpr(2,3)
// addExpr(2,3,8,9) // args will be in func

// // Lesson 99 - Primitives vs Object (Primitives vs. Reference types)
// //Primitives
// let age = 30;
// let oldAge = age;
// age = 31;
// console.log(age, oldAge);

// const me = {
//   name: 'Petr',
//   age: 40,
// };
// const friend = me;
// friend.age = 27;
// console.log('Friend:', friend);
// console.log('Me:', me); // age is 27, cuz object is reference type

// // Lesson 100 - Primitives vs Object in Practice

// let lastName = 'Williams';
// let oldLastName = lastName;
// lastName = 'Davis';
// console.log(lastName, oldLastName); // Davis Williams

// const jessica = {
//   firstName: 'Jessica',
//   lastName: 'Williams',
//   age: 27,
// };

// const marriedJessica = jessica;
// marriedJessica.lastName = 'Davis';
// console.log('Before marriage:', jessica);
// console.log('After marriage:', marriedJessica); // both are Davis because object is reference type and both are pointing to the same object, object is not primitive value

// Copying objects

const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

const jessicaCopy = Object.assign({}, jessica2); // shallow copy, only first level, not deep copy
jessicaCopy.lastName = 'Davis';
jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');
console.log('Before marriage:', jessica2);
console.log('After marriage:', jessicaCopy); // family is the same in both objects, because it is reference type
