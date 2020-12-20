'use strict';

const lufthansa = {
    airline : 'Lufthansa',
    code : 'LH',
    bookings : [],
    book(flight_num, name) {
        console.log(`PASSENGER : ${name}  AIRLINE : ${this.airline} ${flight_num}`);
        //this.bookings({flight :  })
    }
};

lufthansa.book(245, 'John Smith');
lufthansa.book(642, 'Adam Schumer');

const euroair = {
    airline : 'EuroAir',
    code : 'EA',
    bookings : [],
};

const book_func = lufthansa.book;

// this will return an error
// because in the function 'this' keyword refers to the current object calling this function
// but we are not calling this function using an object
//book_func(532, 'Sarah Williams');

// call method
// it calls the function with a 'this' value
// the first argument is the object which 'this' will refer to
// the other arguments are the function parameters
// we can use a method that can be used with different objects
book_func.call(euroair, 532, 'Sarah Williams');
book_func.call(lufthansa, 637, 'Sarah Williams');

// apply method
// same as call method
// except we pass the function arguments as an array
book_func.apply(euroair, [232, 'James Mann']);
book_func.apply(lufthansa, [634, 'James Mann']);