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
