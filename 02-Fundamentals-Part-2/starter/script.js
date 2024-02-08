"use strict";

//Lesson - 31: Strict Mode
let hasDriversLicense = false;
const passTest = true;

//  hasDriverLicense = true; // Uncaught ReferenceError: hasDriverLicense is not defined, when in strict mode, without the strict mode, it will not throw an error
if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive :D');

const interface = 'Audio'; // Uncaught SyntaxError: Unexpected strict mode reserved word, when in strict mode, without the strict mode, it will not throw an error

//Lesson - 32: Functions