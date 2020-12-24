'use strict';

const nums = [1,3,-7,-9,5,-4,6,-7,2];

// filter method returns a new array from the original array elements
// containing only the elements that satsify the condition in the function
// each element of the array is passed to the function as an argument
const new_nums = nums.filter(function(i) {
    return i>0;
});

console.log(new_nums);
