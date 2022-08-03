"use strict";

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
