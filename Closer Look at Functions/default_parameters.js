'use strict';

const bookings = [];

// function with default parameters
// default function parameters allow parameters to be initialized with default values if no value is passed
// 'passengers' and 'price' are function parameters with default values
const create_booking = function(flight_num, passengers=1, price=1999) {

    const booking = {
        // enhanced object literal
        flight_num,
        passengers,
        price
    };

    console.log(booking);
    bookings.push(booking);
};

create_booking('UA342');
create_booking('UA563',45);
create_booking('UA242',67,2499);
