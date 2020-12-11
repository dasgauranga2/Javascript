'use strict';

const friends = ['Michael','Steven','Peter'];
console.log(friends);

// add an element to the end of the array
friends.push('Jay');
console.log(friends);

// add an element to the beginning of the array
friends.unshift('John');
console.log(friends);

// remove an element from the end of the array
friends.pop();
console.log(friends);

// find index of an element in the array
const index = friends.indexOf('Steven');
console.log(index);

// check if an element exists in the array
console.log(friends.includes('John'));
console.log(friends.includes('Jay'));