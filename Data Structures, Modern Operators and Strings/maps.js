'use strict';

// create a new map
// maps contain key-value pairs
const rest = new Map();
// insert a new element with key-value pair
// first argument is the key and the second argument is the value
// if element with the key already exists the value is only updated
rest.set('name', 'Burger King');
rest.set(1, 'Italy');
rest.set(2, 'France');
rest.set('categories', ['Italian','French','Pizza']);

console.log(rest);

// return the value associated to the key
console.log(rest.get('name'));
console.log(rest.get(2));

// check whether a key exists in the map
console.log(rest.has(2));
console.log(rest.has(3));

// total number of elements in the map
console.log(rest.size);

// looping through the elements of a map
for(const [key,value] of rest) {
	console.log(`Key : ${key}    Value : ${value}`);
}