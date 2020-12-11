'use strict';

// declaring a function
function printer() {
    console.log("Name : Gauranga Das");
}
// calling the function
printer();

// function with parameters
// parameters are values passed to the function
function fruit_process(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges today`;
    // function returns a value
    return juice;
}
// we store the returned value in the variable
const result = fruit_process(3,5);
console.log(result);
