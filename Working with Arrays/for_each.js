'use strict';

const nums = [1,7,3,5,8,9,2];

// forEach method calls a function once for each element in the array
// the function has an argument which refers to each element of the array
nums.forEach(function(num) {
    console.log(num);
});


const currencies = new Map([
    ['USD', 'United States'],
    ['EUR', 'Euro'],
    ['GBP', 'Pound']
]);
// looping through elements of a map
currencies.forEach(function(value,key) {
    console.log(`${key}  ${value}`);
});