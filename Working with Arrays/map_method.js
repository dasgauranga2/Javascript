'use strict';

const nums = [1,3,7,9,5,4];

// map method returns a new array by
// calling a function a function for each element of the array
// the element of the array is passed to the function as an argument
const new_nums = nums.map(function(i) {
    return i*3;
});

console.log(new_nums);
