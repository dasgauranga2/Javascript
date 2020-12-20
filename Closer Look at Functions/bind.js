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

// bind method
// we create a new function by passing an object as an argument
// when it is called it's 'this' keyword will refer to the object passes
const euro_book = book_func.bind(euroair);
euro_book(345, 'James Smith');