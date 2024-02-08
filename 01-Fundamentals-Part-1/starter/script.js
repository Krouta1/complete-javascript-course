//Lesson - 1: Linking a JavaScript File
// console.log('Linking a JavaScript File');
// console.log(40 + 8 + 23 - 10);

//Lesson - 2: Values and Variables
// let first_name = "Petr";
// console.log(first_name); 

// let PI = 3.1415;

// let myFirstJob = 'Teacher';
// let myCurrentJob = 'Programmer';

//Lesson - 3: Data Types

// let isIsland = false;
// let population = 130000000;
// let country = 'India';
// let language;

// console.log(typeof isIsland);
// console.log(typeof population);
// console.log(typeof country);
// console.log(typeof language);

//Lesson - 4: let, const and var
// let language = 'portuguese';
// const country = 'Portugal';
// const continent = 'Europe';
// const isIsland = false;

// console.log(isIsland); 

//Lesson - 5: Basic Operators
// const now = 2037;
// const agePetr = now-1991;
// const ageSarah = now-2018;
// console.log(agePetr,ageSarah, now/2);

// const firstName = 'Petr';
// const lastName = 'Kuznetsov';
// console.log(firstName + ' ' + lastName);

// let x = 10 + 5;
// x += 10;
// x *= 4;
// x++;
// x--;
// console.log(x);

//Lesson - 6: Operator Precedence
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence
// const now = 2037;
// const agePetr = now-1991;
// const ageSarah = now-2018;

// console.log(now-1991 > now-2018);
// // console.log(25-10-5); //left to right

// let x, y;
// x = y = 25-10-5; // x = y = 10, x = 10

// const avaerageAge = (agePetr + ageSarah) / 2;
// console.log(agePetr, ageSarah, avaerageAge);

//Lesson - 7: Strings and Template Literals

// const firstName = 'Petr';
// const job = 'teacher';
// const birthYear = 1994;

// const petr_one = "I'm " + firstName + ', a ' + (2037 - birthYear) + ' years old ' + job + '!';
// const petr_new = `I'm ${firstName}, a ${2037 - birthYear} years old ${job}!`;

// console.log(petr_one, petr_new);

//Lesson - 8: Taking Decisions: if / else Statements
// const age = 15;

// if (age >= 18) {
//   console.log('Sarah can start driving license 🚗');
// } else {
//   const yearsLeft = 18 - age;
//   console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
// }

// const birthYear = 2012;

// let century;
// if (birthYear <= 2000) {
//   century = 20;
// } else {
//   century = 21;
// }
// console.log(century);

//Lesson - 9: Type Conversion and Coercion
// const inputYear = '1991';
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18);

// console.log(Number('Jonas'));
// console.log(typeof NaN);

// console.log(String(23), 23);

// // type coercion
// console.log('I am ' + 23 + ' years old');
// console.log('23' - '10' - 3); // 10
// console.log('23' / '2'); // 11.5

// let n = '1' + 1; // '11'
// n = n - 1;
// console.log(n); // 10

//Lesson - 10: Truthy and Falsy Values
// 5 falsy values: 0, '', undefined, null, NaN
// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean('Jonas'));
// console.log(Boolean({}));
// console.log(Boolean(''));

// const money = 100;
// if (money) {
//   console.log("Don't spend it all ;)");
// } else {
//   console.log('You should get a job!');
// }

// let height = 0;
// if (height) {
//   console.log('YAY! Height is defined');
// } else {
//   console.log('Height is UNDEFINED');
// }

//Lesson - 11: Equality Operators: == vs. ===
// const age = 18;
// if (age === 18) console.log('You just became an adult :D (strict)');
// if (age == 18) console.log('You just became an adult :D (loose)');


// const favourite = Number(prompt("What's your favourite number?"));
// console.log(favourite);
// console.log(typeof favourite);

// if (favourite === 23) { // 22 === 23 -> FALSE
//   console.log('Cool! 23 is an amzaing number!')
// } else if (favourite === 7) {
//   console.log('7 is also a cool number')
// } else if (favourite === 9) {
//   console.log('9 is also a cool number')
// } else {
//   console.log('Number is not 23 or 7 or 9')
// }

// if (favourite !== 23) console.log('Why not 23?');

//Lesson - 13: Logical Operators

// const hasDriversLicense = true; // A
// const hasGoodVision = true; // B

// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// console.log(!hasDriversLicense);

// if (hasDriversLicense && hasGoodVision) {
//   console.log('Sarah is able to drive!');
// } else {
//   console.log('Someone else should drive...');
// }

// const isTired = false; // C
// console.log(hasDriversLicense && hasGoodVision && isTired);

// if (hasDriversLicense && hasGoodVision && !isTired) {
//   console.log('Sarah is able to drive!');
// } else {
//   console.log('Someone else should drive...');
// }

// //just training
// language === 'english' && population < 50 && !isIsland

// if (language === 'english' && population < 50 && !isIsland) {
//   console.log(`You should live in ${country} :)`);
// } else {
//   console.log(`${country} does not meet your criteria :(`);
// }

//Lesson - 14: The switch Statement

// const day = 'saturday';

// switch (day) {
//     case 'monday': // day === 'monday'
//         console.log('Plan course structure');
//         console.log('Go to coding meetup');
//         break;
//     case 'tuesday':
//         console.log('Prepare theory videos');
//         break;
//     case 'wednesday':
//     case 'thursday':
//         console.log('Write code examples');
//         break;
//     case 'friday':
//         console.log('Record videos');
//         break;
//     case 'saturday':
//     case 'sunday':
//         console.log('Enjoy the weekend :D');
//         break;
//     default:
//         console.log('Not a valid day!');
// }

//Lesson - 15: Statements and Expressions

// 3 + 4 // expression
// 1991 // expression
// true && false && !false // expression

// if (23 > 10) {
//     const str = '23 is bigger';
// } // statement

//Lesson - 16: The Conditional (Ternary) Operator

const age = 23;
// age >= 18 ? console.log('I like to drink wine 🍷') : console.log('I like to drink water 💧');

const drink = age >= 18 ? 'wine 🍷' : 'water 💧';
console.log(drink);

let drink2;
if (age >= 18) {
  drink2 = 'wine 🍷';
} else {
  drink2 = 'water 💧';
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? 'wine 🍷' : 'water 💧'}`);

