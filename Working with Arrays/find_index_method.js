'use strict';

const nums = [1,3,6,-9,5,-4,6,-7,2];

// findIndex method returns the index of the first element in the array  
// that satisfies the condition in the function
// each element of the array is passed to the function as an argument
const result = nums.findIndex(function(i) {
    return i<0;
});

console.log(result);
