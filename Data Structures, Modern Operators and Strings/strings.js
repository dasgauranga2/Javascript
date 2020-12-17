'use strict';

const airline = 'Air India';
const plane = 'A320';

// get character of a string at a specified index
console.log(airline[2]);

// length of string
console.log(plane.length);

// get index of a character of a string
console.log(airline.indexOf('r'));

// slice
// it extracts part of a string
// the first argument is starting index
// the second argument is end index(if not provided the end index will be that of the last character)
console.log(airline.slice(2));
console.log(airline.slice(2,6));
// negative index starts counting from the end
console.log(airline.slice(-3));
console.log(airline.slice(2,-3));