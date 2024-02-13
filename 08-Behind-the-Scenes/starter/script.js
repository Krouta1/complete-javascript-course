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
