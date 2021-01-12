'use strict';

// create a new array containing empty values
// we specify the length of the array as an argument
const x = new Array(6);
console.log(x);

// 'fill' method fills the entire array with the specified value
x.fill(2);
console.log(x);

// create a new array using the 'from' method
// we specify the length of the array as the first argument
// the values we want to fill the array with is returned by the function
const y = Array.from({length:5}, function() {
    return 3;
});
console.log(y);

// create a new array using the 'from' method
// we specify the length of the array as the first argument
// the values we want to fill the array with is returned by the function
// the function has two parameters
// the second paramter is the index of the array element
// the below output will be '[0,2,4,6,8]'
const z = Array.from({length:5}, function(current,i) {
    return i*2;
});
console.log(z);