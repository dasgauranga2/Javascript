'use strict';

// arrays
// they are used to store multiple values in a single variable
const friends = ['Michael','Steven','Peter'];
console.log(friends)

// accessing an element of an array by their index
console.log(friends[1]);

// length of an array
console.log(friends.length);

// changing the value of an array element
friends[2] = 'Jay';
console.log(friends);

// array with elements of different types
const details = ['Scumer', 'Jonas', 124, friends];
console.log(details)