"use strict";

//Lesson - 31: Strict Mode
//let hasDriversLicense = false;
//const passTest = true;

//  hasDriverLicense = true; // Uncaught ReferenceError: hasDriverLicense is not defined, when in strict mode, without the strict mode, it will not throw an error
//if (passTest) hasDriversLicense = true;
//if (hasDriversLicense) console.log('I can drive :D');

//const interface = 'Audio'; // Uncaught SyntaxError: Unexpected strict mode reserved word, when in strict mode, without the strict mode, it will not throw an error

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

//Lesson - 33: Functions declaration vs expressions

//function calcAge1(birthYear){
    //return 2037 - birthYear;
//}

// anonymous func (expresion)
//const calcAge2 = function (birthYear){
    //return 2037 - birthYear;
//}
//const age1 = calcAge1(1856)
//const age2 = calcAge2(1856)
//console.log(age1,age2);

//Lesson - 34: Arrow Functions
// const calcAge3 = birthYear => 2037 - birthYear;
// const age3 = calcAge3(1856);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     return `${firstName} retires in ${retirement} years.`
// }
// console.log(yearsUntilRetirement(1856, 'John'));

//Lesson - 35: Functions calling other functions
// function cutFruitPieces(fruit){
//     return fruit * 4;
// }

// function fruitProcessor ( apples, oranges ){

//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);

//     const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges.`

//     return juice
// }
// console.log(fruitProcessor(6,4));

//Lesson - 36: Reviewing Functions

// const calcAge = function (birthYear){
//     return 2037 - birthYear;
// }

// const yearsUntilRetirement = function (birthYear, firstName) {
//     const age = calcAge(birthYear);
//     const retirement = 65 - age;

//     if(retirement > 0){
//         console.log(`${firstName} retires in ${retirement} years.`);
//         return retirement;
//     }else{
//         console.log(`${firstName} has already retired.`);
//         return -1;
//     }
// }

//Lesson - 37: Intoduction to  Arrays
// const friend1 = 'Michael';
// const friend2 = 'Steven';
// const friend3 = 'Peter';

// const friends = ['Michael', 'Steven', 'Peter'];
// console.log(friends);

// //const years = new Array(1991, 1984, 2008, 2020);

// console.log(friends[0]);
// console.log(friends.length);
// console.log(friends[friends.length - 1]);//last element

// friends[2] = 'Jay';

// const petr = ['Petr', 'Kotov', 2037 - 1984, 'teacher', friends];
// console.log(petr);

// //exercise
// const calcAge = function (birthYear){
//     return 2037 - birthYear;
// }
// const years = [1990, 1967, 2002, 2010, 2018];
// console.log(calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1]));

//Lesson - 38: Basic Array Operations (Methods)
// const friends = ['Michael', 'Steven', 'Peter'];

//Add elements
// const newLength = friends.push('Jay');
// console.log(newLength);

// friends.unshift('John');//add to the beginning
// console.log(friends);

// //Remove elements
// friends.pop(); //last
// const popped = friends.pop();// remove and return the last element
// console.log(popped);

// friends.shift();//remove the first element

// console.log(friends.indexOf('Steven'));//return the index of the element
// console.log(friends.indexOf('Bob'));//return -1 if not found

// console.log(friends.includes('Steven'));//return true or false
// console.log(friends.includes('Bob'));//return true or false

// if(friends.includes('Steven')){
//     console.log('You have a friend called Steven');
// }

//Lesson - 39: Introduction to Objects

// const petr = {
//     firstName: 'Petr',
//     lastName: 'Kotov',
//     age: 2037 - 1984,
//     job: 'teacher',
//     friends: ['Michael', 'Steven', 'Peter']
// };

//Lesson - 40: Dot vs. Bracket Notation

// const petr = {
//     firstName: 'Petr',
//     lastName: 'Kotov',
//     age: 2037 - 1984,
//     job: 'teacher',
//     friends: ['Michael', 'Steven', 'Peter']
// };

// console.log(petr.firstName);
// console.log(petr['lastName']);// any expression can be used in the brackets

// const nameKey = 'Name';
// console.log(petr['first' + nameKey]);
// console.log(petr['last' + nameKey]);

// const interestedIn = prompt('What do you want to know about Petr? Choose between firstName, lastName, age, job, and friends');
// if(petr[interestedIn]){
//     console.log(petr[interestedIn]);
// }else{
//     console.log('Wrong request! Choose between firstName, lastName, age, job, and friends');
// }

// petr.location = 'Russia';
// petr['twitter'] = '@petr';

// //Challenge
// // "Petr has 3 friends, and his best friend is called Michael"
// console.log(`${petr.firstName} has ${petr.friends.length} friends, and his best friend is called ${petr.friends[0]}`);

//Lesson - 41: Object Methods
// const petr = {
//     firstName: 'Petr',
//     lastName: 'Kotov',
//     birth: 1984,
//     job: 'teacher',
//     friends: ['Michael', 'Steven', 'Peter'],
//     hasDriversLicense: true,
//     calcAge: function(){
//         this.age = 2037 - this.birth;
//         return this.age;
//     },
//     getSummary: function(){
//         return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license`
//     }
// };

// console.log(petr.calcAge());
// console.log(petr['calcAge']());
// console.log(petr.age);

// //Challenge
// // "Petr is a 33-year old teacher, and he has a driver's license"
// console.log(petr.getSummary());

//Lesson - 42: Iteration: The for Loop
// for loop keeps running while condition is TRUE
// for(let rep = 1; rep <= 10; rep++){
//     console.log(`Lifting weights repetition ${rep}`);
// }

//Lesson - 43: Looping Arrays, Breaking and Continuing
// const petr = [
//     'Petr',
//     'Kotov',
//     2037 - 1984,
//     'teacher',
//     ['Michael', 'Steven', 'Peter'],
//     true
// ];

// const types = [];

// for(let i = 0; i < petr.length; i++){
//     console.log(petr[i], typeof petr[i]);
// }

// //create a new array with the types of the elements
// for(let i = 0; i < petr.length; i++){
//     //types[i] = typeof petr[i];
//     types.push(typeof petr[i]);
// }
// console.log(types);

// const years = [1991, 2007, 1969, 2020];
// const ages = [];

// for(let i = 0; i < years.length; i++){
//     ages.push(2037 - years[i]);
// }
// console.log(ages);

// //continue and break
// for(let i = 0; i < petr.length; i++){
//     if(typeof petr[i] !== 'string') continue;
//     console.log(petr[i], typeof petr[i]);
// }
// //break with number
// for(let i = 0; i < petr.length; i++){
//     if(typeof petr[i] === 'number') break;
//     console.log(petr[i], typeof petr[i]);
// }

//Lesson - 44: Looping Backwards and Loops in Loops
// const petr = [
//     'Petr',
//     'Kotov',
//     2037 - 1984,
//     'teacher',
//     ['Michael', 'Steven', 'Peter']
// ];

// //looping backwards
// for(let i = petr.length - 1; i >= 0; i--){
//     console.log(i, petr[i]);
// }

// //loop inside a loop
// for(let exercise = 1; exercise < 4; exercise++){
//     console.log(`-------- Starting exercise ${exercise}`);
//     for(let rep = 1; rep < 6; rep++){
//         console.log(`Exercise ${exercise}: Lifting weights repetition ${rep}`);
//     }
// }

//Lesson - 45: The while Loop
// for(let rep = 1; rep <= 10; rep++){
//     console.log(`Lifting weights repetition ${rep}`);
// }

// let rep = 1;
// while(rep <= 10){
//     console.log(`While: Lifting weights repetition ${rep}`);
//     rep++;
// }

// let dice = Math.trunc(Math.random() * 6) + 1;
// console.log(dice);

// while(dice !== 6){
//     console.log(`You rolled a ${dice}`);
//     dice = Math.trunc(Math.random() * 6) + 1;
//     if(dice === 6) console.log('Loop is about to end...');
// }