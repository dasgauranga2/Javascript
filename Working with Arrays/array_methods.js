'use strict';

let arr = ['a','b','c','d','e'];

// slice method selects a contiguous subarray of the original array
// first parameter specifies the index of where to start the selection
// second parameter specifies the index of where to end the selection
console.log(arr.slice(1,3));

// splice method is similar to slice
// except it removes the selected part from the original array
console.log(arr.splice(2));
console.log(arr);

let nums = [1,2,3,4];

// reverse the array
nums.reverse()
console.log(nums);

let letters = ['x','y','z'];
// join all the array elements with a string between them
// we specify the string as a parameter in the join method
console.log(letters.join('-'));
