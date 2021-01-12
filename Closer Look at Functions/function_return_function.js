'use strict';

const greet = function(greeting) {

    return function(name) {
        console.log(`${greeting} ${name}`);
    }
}

// the returned value will be a function
const greeter = greet("HELLO");
// we can call the function which was returned
greeter("Gauranga Das");