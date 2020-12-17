'use strict';

const airline = 'Air India';
const plane = 'A320';

// convert all characters of the string to lowercase
console.log(airline.toLowerCase());
// convert all characters of the string to uppercase
console.log(airline.toUpperCase());

// replace a character in a string with another character
// first argument is the character to replace 
// second argument is the character to be replaced with
const price = '2854';
console.log(price.replace('4','3'));

const new_plane = 'A320neo';
// check whether the string has the specified substring 
console.log(new_plane.includes('A320'));