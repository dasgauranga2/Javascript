'use strict';

const nums = [1,3,5,6,2];

// reduce method reduces the entire array to a single value
// the first argument is a function that is called for each element of the array
// the return value of the function is stroed in the accumulator variable
// the function has two parameters
// the first parameter is the current value of the accumulator variable
// the second parameter is the value of the current array element
// the second argument is the initial value of the accumulator variable
const final_sum = nums.reduce(function(acc,curr) {
    return acc+curr;
}, 100);

console.log(final_sum);
