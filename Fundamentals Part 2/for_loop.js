'use strict';

// for loop
for(let i=0; i<5; i++) {
    console.log(`NUMBER : ${i+1}`);
}

const names = ['Jon','Peter','Steven','Sullivan'];
// looping through the elements of an array
for(let i=0; i<names.length; i++) {
    console.log(names[i]);
}

// JS also supports 'continue' and 'break' statements
// the break statement breaks the loop and continues executing the code after the loop 
// the continue statement breaks one iteration of the loop and continues with the next iteration of the loop