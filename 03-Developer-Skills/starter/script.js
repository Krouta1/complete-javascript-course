// Remember, we're gonna use strict mode in all scripts now!
'use strict';

//Lesson - 55: Prettier code formatter

const x = 23;
if (x === 23) console.log(23);

const calcAge = birthYear => 2037 - birthYear;
console.log(calcAge(1991));

//Lesson - 56: Using Google, StackOverflow and MDN

//PROBLEM: we work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

//1) Understanding the problem
//- What is temperature amplitude? Answer: difference between highest and lowest temperature
//- How to calculate max and min temperatures?
//- What's a sensor error? And what to do?

//2) Breaking up into sub-problems
//- How to ignore errors?
//- Find max and min value in temperature array
//- Subtract min from max (amplitude) and return it

// const calcTempAmplitude = function (temps) {
//   let max = temps[0];
//   let min = temps[0];

//   for (let i = 0; i < temps.length; i++) {
//     const currentTemp = temps[i];
//     if (typeof currentTemp !== 'number') continue;
//     if (currentTemp > max) max = currentTemp;
//     if (currentTemp < min) min = currentTemp;
//   }
//   console.log(max, min);
//   return max - min;
// };

// const amplitude = calcTempAmplitude(temperatures);
// console.log(amplitude);

//PROBLEM: Function should now receive 2 arrays of temperatures

//1) Understanding the problem
//- With 2 arrays, should we implement functionality twice? No! Just merge two arrays

//2) Breaking up into sub-problems
//- Merge 2 arrays

// const calcTempAmplitudeNew = function (t1, t2) {
//   const temps = t1.concat(t2);
//   console.log(temps);

//   let max = temps[0];
//   let min = temps[0];

//   for (let i = 0; i < temps.length; i++) {
//     const currentTemp = temps[i];
//     if (typeof currentTemp !== 'number') continue;
//     if (currentTemp > max) max = currentTemp;
//     if (currentTemp < min) min = currentTemp;
//   }
//   console.log(max, min);
//   return max - min;
// };

// const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);

//Lesson - 57: Debugging with the Console and Breakpoints
