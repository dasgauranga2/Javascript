'use strict';

// function declaration
function calc_age1(year) {
    return 2020-year;
}
const age1 = calc_age1(1999);
console.log(age1);

// function expression
// it is very similar to function declaration 
// the main difference between function expression and function declaration is the function name, which can be omitted in function expression
// we can't use function expressions before we create them
const calc_age2 = function (year) {
    return 2020-year;
}
const age2 = calc_age2(1997);
console.log(age2);