"use strict";

// const cleanupLogFiles = require("npm/lib/utils/cleanup-log-files");

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log ("I can drive");


// Js tiene reservadas una serie de nombres reservados que no se pueden utilizar

// const interface = "Audio";
// const private = 534;
// const if = 21;
// const nombre = "Pepe";

// function logger() {
//     console.log(`My name is ${nombre}`);
// }

//running the function
// logger();

// function fruitProcessor(apples, oranges){
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`
//     return juice;
// }



// const appleJuice = fruitProcessor(8, 0);
// console.log(appleJuice);
// console.log(fruitProcessor(5, 1));

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);


// const num = Number("23");

//Function declaration

// function calcAge1(birtYear){
//     return 2037 - birtYear;
// }


// const age1 = calcAge1(1995);

// // Function expression

// const calcAge2 = function (birthYear){
//     return 2037 - birthYear;
// }

// const age2 = calcAge2(1991);
// console.log(age1, age2);



// Arrow function

// const calcAge3 = birthYear => 2037 - birthYear;

// const age3 = calcAge3(1991);
// console.log(age3);


// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2022 - birthYear;
//     const retirement = 65 - age;
//     // return retirement;
//     return `${firstName} retires in ${retirement}`;
// }

// console.log(yearsUntilRetirement(1991, "Juan"));
// console.log(yearsUntilRetirement(1980, "Antonio"));
// console.log(yearsUntilRetirement(1995, "Pepe"));



// function cutFruitPieces (fruit) {
//     return fruit * 4;
// }

// function fruitProcessor(apples, oranges){
//    const applePieces = cutFruitPieces(apples);
//    const orangePieces = cutFruitPieces(oranges);

//     const juice = `Juice with ${applePieces} apples pieces and ${orangePieces} oranges pieces`
//     return juice;
// }


// console.log(fruitProcessor(2, 5));


// const calcAge = function (birthYear){
//     return 2022 - birthYear;
// }

// const yearsUntilRetirement = function (birthYear, firstName) {
//     const age = calcAge(birthYear);
//     const retirement = 65 - age;

//     if(retirement > 0){
//         console.log(`${firstName} retires in ${retirement} years`);
//         return retirement;
//     }else{
//         console.log(`${firstName} has already retired`);
//         return "You are retired";
//     }

//     return retirement;
// }

// console.log(yearsUntilRetirement(1995, "Joanito"));
// console.log(yearsUntilRetirement(1900, "Angel"));


// function calcAge (birthYear, firstName){
//     const age = 2022 - birthYear;
//     console.log(`${firstName} is ${age} years old`);
//     return age;
// }

// const age = calcAge(1995, "Joanito");


// const friend1 = "Michael";
// const friend2 = "Steven";
// const friend3 = "Peter";

// console.log(friend1, friend2, friend3);

// const friends = ["Michael", "Steven", "Peter"];

// console.log(friends);

// const years = new Array(1991, 1984, 2008, 2020);
// console.log(years);


// console.log(friends[0]);
// console.log(friends[2]);

// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[0] = "Juan";
// friends[1] = "Jay";
// friends[2] = "Jhonas";
// console.log(friends[0]);
// console.log(friends[1]);
// console.log(friends[2]);
// console.log(friends);

// friends = ["Bob", "Alice"];

// const firstName = "Juanito";
// const juani = [firstName, "Rivero", 2022 - 1995, "developer", friends];
// console.log(juani);
// console.log(juani.length);
// console.log(juani[3]);


const calcAge = function (birthYear){
    return 2022 - birthYear;
}


const years = [1998, 1967, 2002, 2010, 2018];


// const age1 = calcAge((years[0]));
// const age2 = calcAge((years[1]));
// const age3 = calcAge(years[years.length - 1]);

// console.log(age1, age2, age3);

// Same operation but now, all in an array

// const ages = [calcAge((years[0])), calcAge((years[1])), calcAge(years[years.length - 1])];

// console.log(ages);

// const friends = ["Michael", "Steven", "Peter"];

// //Add elements
// const newLength = friends.push("Jay");
// console.log(friends);
// console.log(newLength);

// friends.unshift("Jhon");
// console.log(friends);


// //Remove elements
// friends.pop(); //Remove last
// const popped = friends.pop(); //Remove last
// console.log(popped);
// console.log(friends);

// friends.shift(); //Remove first
// console.log(friends);

// console.log(friends.indexOf("Steven"));
// console.log(friends.indexOf("Lisa"));

// console.log(friends.includes("Steven"));
// console.log(friends.includes("Lisa"));
// friends.push(23);
// console.log(friends);
// console.log(friends.includes("23"));
// console.log(friends.includes(23));

// if(friends.includes("Steven")){
//     console.log("You have a friend called Steven");
// }


// const namesArray = [
//     "Juan",
//     "Rivero",
//     2022-1995,
//     "Developer",
//     ["Michael", "Peter", "Steven"]
// ];

// const nombre = {
//     firstName: "Juan",
//     lastName: "Rivero",
//     age: 2022 - 1995,
//     job: "Developer",
//     friends: ["Michael", "Peter", "Steven"]
// };

// console.log(namesArray);
// console.table(nombre);

// console.log(nombre);
// console.log(nombre.lastName);
// console.log(nombre.age);
// console.log(nombre["lastName"]);

// const nameKey = "Name";

// console.log(nombre["first" + nameKey]);
// console.log(nombre["last" + nameKey]);


// const interestedIn =  prompt(`What do you want to know about Juan? Chose between firstName,
//  lastName, age, job and friends`)
// console.log(nombre[interestedIn]);

// if (nombre[interestedIn]) {
//     console.log(nombre[interestedIn]);
// }else{
//     prompt("Wrong request! Chose between firstName, lastName, age, job and friends");
// }


// nombre.location = "Spain";
// nombre["profile web"] = "www.google.com";
// console.log(nombre);


//Challenge

//"Juan has 3 friends, and his best friend is calles Michael"


// console.log(nombre["firstName"], "has", nombre.friends.length, "friends, and hist best friends is called", nombre.friends[0]);

// console.log(`${nombre.firstName} has ${nombre.friends.length} friends, and his best friends is called ${nombre.friends[0]}`);


// const nombre = {
//     firstName: "Juan",
//     lastName: "Rivero",
//     birthYear: 1995,
//     job: "Developer",
//     friends: ["Michael", "Peter", "Steven"],
//     hadDriversLicense: true,

//     // calcAge: function (birthYear){
//     //     return 2022 - birthYear;
//     // }

//     // calcAge: function() {
//     //     // console.log(this);
//     //     return 2022 - this.birthYear;
//     //  }

//     calcAge: function() {
//         this.age = 2022 - this.birthYear;
//         return this.age;

//      },

//     getSummary: function() {
//         return `${this.firstName} is a ${this.calcAge()} year old ${nombre.job}, and he has ${this.hadDriversLicense ? "a" : "no"} driver's License`

// }

// };

// console.log(nombre.calcAge());
// console.log(nombre.age);
// console.log(nombre.getSummary());

// Challenge
//  "Juan is a 27 yerars old Developer, and he has or not a driver's license"
