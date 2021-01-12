'use strict';

const flight_num = 'LH154';
const gauranga = {
    name : 'Gauranga Das',
    age : 21
};

const check_in = function(fn, passenger) {
    fn = 'LH982';
    passenger.name = 'Mr. ' + passenger.name;
};

// primitive types are passed by value
// objects are passed by reference
check_in(flight_num, gauranga);

// the value of 'flight_num' will remain unchanged
console.log(flight_num);
// the properties of 'gauranga' will be changed
console.log(gauranga);
