'use strict';

// objects
// it is a collection of properties and a property is an association between a key and a value
// a property of an object can be explained as a variable that stores a value and is attached to the object
const jonas = {
    first_name : 'Gauranga',
    last_name : 'Das',
    age : 19,
    job : 'Software Engineer'
};

console.log(jonas);

// we can access the properties of an object using a dot-notation
console.log(jonas.last_name);
// we can access the properties of an object using a bracket-notation
// each property is associated with a string value that can be used to access it
console.log(jonas['last_name']);

jonas['location'] = 'Assam';
console.log(jonas);