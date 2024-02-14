'use strict';

// Assignment Data
const books = [
  {
    title: 'Algorithms',
    author: ['Robert Sedgewick', 'Kevin Wayne'],
    publisher: 'Addison-Wesley Professional',
    publicationDate: '2011-03-24',
    edition: 4,
    keywords: [
      'computer science',
      'programming',
      'algorithms',
      'data structures',
      'java',
      'math',
      'software',
      'engineering',
    ],
    pages: 976,
    format: 'hardcover',
    ISBN: '9780321573513',
    language: 'English',
    programmingLanguage: 'Java',
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.41,
        ratingsCount: 1733,
        reviewsCount: 63,
        fiveStarRatingCount: 976,
        oneStarRatingCount: 13,
      },
    },
    highlighted: true,
  },
  {
    title: 'Structure and Interpretation of Computer Programs',
    author: [
      'Harold Abelson',
      'Gerald Jay Sussman',
      'Julie Sussman (Contributor)',
    ],
    publisher: 'The MIT Press',
    publicationDate: '2022-04-12',
    edition: 2,
    keywords: [
      'computer science',
      'programming',
      'javascript',
      'software',
      'engineering',
    ],
    pages: 640,
    format: 'paperback',
    ISBN: '9780262543231',
    language: 'English',
    programmingLanguage: 'JavaScript',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.36,
        ratingsCount: 14,
        reviewsCount: 3,
        fiveStarRatingCount: 8,
        oneStarRatingCount: 0,
      },
    },
    highlighted: true,
  },
  {
    title: "Computer Systems: A Programmer's Perspective",
    author: ['Randal E. Bryant', "David Richard O'Hallaron"],
    publisher: 'Prentice Hall',
    publicationDate: '2002-01-01',
    edition: 1,
    keywords: [
      'computer science',
      'computer systems',
      'programming',
      'software',
      'C',
      'engineering',
    ],
    pages: 978,
    format: 'hardcover',
    ISBN: '9780130340740',
    language: 'English',
    programmingLanguage: 'C',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 1010,
        reviewsCount: 57,
        fiveStarRatingCount: 638,
        oneStarRatingCount: 16,
      },
    },
    highlighted: true,
  },
  {
    title: 'Operating System Concepts',
    author: ['Abraham Silberschatz', 'Peter B. Galvin', 'Greg Gagne'],
    publisher: 'John Wiley & Sons',
    publicationDate: '2004-12-14',
    edition: 10,
    keywords: [
      'computer science',
      'operating systems',
      'programming',
      'software',
      'C',
      'Java',
      'engineering',
    ],
    pages: 921,
    format: 'hardcover',
    ISBN: '9780471694663',
    language: 'English',
    programmingLanguage: 'C, Java',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 3.9,
        ratingsCount: 2131,
        reviewsCount: 114,
        fiveStarRatingCount: 728,
        oneStarRatingCount: 65,
      },
    },
  },
  {
    title: 'Engineering Mathematics',
    author: ['K.A. Stroud', 'Dexter J. Booth'],
    publisher: 'Palgrave',
    publicationDate: '2007-01-01',
    edition: 14,
    keywords: ['mathematics', 'engineering'],
    pages: 1288,
    format: 'paperback',
    ISBN: '9781403942463',
    language: 'English',
    programmingLanguage: null,
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.35,
        ratingsCount: 370,
        reviewsCount: 18,
        fiveStarRatingCount: 211,
        oneStarRatingCount: 6,
      },
    },
    highlighted: true,
  },
  {
    title: 'The Personal MBA: Master the Art of Business',
    author: 'Josh Kaufman',
    publisher: 'Portfolio',
    publicationDate: '2010-12-30',
    keywords: ['business'],
    pages: 416,
    format: 'hardcover',
    ISBN: '9781591843528',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.11,
        ratingsCount: 40119,
        reviewsCount: 1351,
        fiveStarRatingCount: 18033,
        oneStarRatingCount: 1090,
      },
    },
  },
  {
    title: 'Crafting Interpreters',
    author: 'Robert Nystrom',
    publisher: 'Genever Benning',
    publicationDate: '2021-07-28',
    keywords: [
      'computer science',
      'compilers',
      'engineering',
      'interpreters',
      'software',
      'engineering',
    ],
    pages: 865,
    format: 'paperback',
    ISBN: '9780990582939',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.7,
        ratingsCount: 253,
        reviewsCount: 23,
        fiveStarRatingCount: 193,
        oneStarRatingCount: 0,
      },
    },
  },
  {
    title: 'Deep Work: Rules for Focused Success in a Distracted World',
    author: 'Cal Newport',
    publisher: 'Grand Central Publishing',
    publicationDate: '2016-01-05',
    edition: 1,
    keywords: ['work', 'focus', 'personal development', 'business'],
    pages: 296,
    format: 'hardcover',
    ISBN: '9781455586691',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.19,
        ratingsCount: 144584,
        reviewsCount: 11598,
        fiveStarRatingCount: 63405,
        oneStarRatingCount: 1808,
      },
    },
    highlighted: true,
  },
];

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

// //Lesson - 103: Destructuring Arrays
// const arr = [2, 3, 4];
// // without destructuring
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];
// console.log(a, b, c);
// // with destructuring
// const [x, y, z] = arr;
// console.log(x, y, z);
// console.log(arr); //still the same array not changed

// //const [first, second] = restaurant.categories;
// const [first, , thrid] = restaurant.categories; //skipping the second element
// console.log(first, thrid);

// //switching variables
// let [main, secondary] = restaurant.categories;
// console.log(main, secondary);

// // const temp = main;
// // main = secondary;
// // secondary = temp; //swapping the variables normal way
// // console.log(main, secondary);

// //swapping the variables using destructuring
// [main, secondary] = [secondary, main]; //swapping the variables using destructuring
// console.log(main, secondary);

// console.log(restaurant.order(2, 0)); //['Garlic Bread', 'Pizza']
// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse); //Garlic Bread Pizza

// //nested destructuring
// const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j); //2 [5, 6]
// //descructuring inside destructuring
// const [p, , [q, r]] = nested;
// console.log(p, q, r); //2 5 6

// //default values, it is also way to find the length of the array
// const [k = 1, l = 1, m = 1] = [8, 9];
// console.log(k, l, m); //8 9 1

//Assignment - 1.1 Destructure the books array into two variables called firstBook and secondBook.
// const [firstBook, secondBook] = books;
// console.log(firstBook, secondBook);

//Assignment - 1.2 Destructure the books array into a variable called thirdBook. You must skip the first two books.
// const [, , thirdBook] = books;
// console.log(thirdBook);

//Assignment - 1.3 Below is the nested ratings array that contains two other arrays. Destructure the nested ratings arrays into two variables called rating and ratingsCount. In the result of your destructuring, the ratings variable should store a number 4.19, and the ratingsCount variable should store a number 144584.
// const ratings = [
//   ['rating', 4.19],
//   ['ratingsCount', 144584],
// ];
// const [[, rating], [, ratingsCount]] = ratings;
// console.log(rating, ratingsCount);

//Assignment - 1.4 Below is the ratingStars array. Destructure it into three variables called fiveStarRatings, oneStarRatings and threeStarRatings. Assign the threeStarRatings variable with a default value of 0.
// const ratingStars = [63405, 1808];
// const [fiveStarRatings, oneStarRatings, threeStarRatings = 0] = ratingStars;
// console.log(fiveStarRatings, oneStarRatings, threeStarRatings);

//Lesson - 104: Destructuring Objects

// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// //changing the variable names
// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// // //default values
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// // //mutating variables
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };
// ({ a, b } = obj); //() is required to destructure the object
// console.log(a, b);

// // //nested objects
// const {
//   fri: { open: o, close: c },
// } = hours;
// console.log(o, c);

// //Assignment - 2.1 Destructure the first book object from the books array into variables called title, author and ISBN.
// //const { title, author, ISBN } = books[0];
// const [{ title, author, ISBN }] = books; //another way to destructure
// console.log(title, author, ISBN);

// //Assignment - 2.2 Each book object has the keywords property. Destructure the first book object from the books array into a variable called tags. The tags variable should be assigned with the value of the keywords property.
// //const [{ keywords: tags }] = books;
// const { keywords: tags } = books[0]; //another way to destructure

// //Assignment - 2.3 The seventh book from the books array is missing the programmingLanguage property. Destructure the seventh book object (books[6]) into variables called language and programmingLanguage. Assign the programmingLanguage variable with a default value of 'unknown'.

// const { language, programmingLanguage = 'unknown' } = books[6];

// Lesson 105 - Spread Operator

const arr = [7, 8, 9]
const badNewArr = [1, 2, arr[0], arr[1], arr[2]]
console.log(badNewArr)

const newArr = [1,2, ...arr]
console.log(newArr)

console.log(...newArr);

//new menu, important it is new array
const newMenu = [...restaurant.mainMenu, 'Gnocci']
console.log(newMenu);

//create shallow copy of array
const mainMenuCopy = [...restaurant.mainMenu]
console.log(mainMenuCopy);

//join two or more arrays
const menu = [...restaurant.starterMenu,...restaurant.mainMenu]
console.log(menu);

//Iterables array, strings,maps,sets NOT objects

const str = 'Jonas'
const letters = [...str,' ','S.']
console.log(letters);
//console.log(`${...letters} Potter`); // you can only use spread to pass values to func or building array

// const ingredients = [prompt("Let's make pasta! Ingredient 1?"),prompt("Let's make pasta! Ingredient 2?"),prompt("Let's make pasta! Ingredient 3?")]
// restaurant.orderPasta(...ingredients)

//it acually works with objects
const newRestaurant = {foundedIn:2050,...restaurant, founder: 'Guseppe'}
console.log(newRestaurant);


