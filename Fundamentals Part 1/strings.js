
const first = "Gauranga";
const job = "Engineer";

// concatenating strings
const full_name = "I am " + first + " and my job is " + job;
console.log(full_name);

// temaplate literals
// we can create dynamic strings
// below we substitute the part of the string denoted by ${variable/expression}
// for the values of variable or expression
const new_detail = `My name is ${first} and my job is an ${job}`;
console.log(new_detail);