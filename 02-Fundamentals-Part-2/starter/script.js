"use strict";

//Lesson - 31: Strict Mode
let hasDriversLicense = false;
const passTest = true;

//  hasDriverLicense = true; // Uncaught ReferenceError: hasDriverLicense is not defined, when in strict mode, without the strict mode, it will not throw an error
if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive :D');

const interface = 'Audio'; // Uncaught SyntaxError: Unexpected strict mode reserved word, when in strict mode, without the strict mode, it will not throw an error

//Lesson - 32: Functions
// function logger (){
//     console.log("Hello world.");
// };
// logger();

// function fruitProcessor ( apples, oranges ){
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`
//     return juice
// }
// console.log(fruitProcessor(6,4));

// const appleOrangeJuice = fruitProcessor(4,6)
// console.log(appleOrangeJuice);
