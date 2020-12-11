'use strict';

// object with methods
const jonas = {
    first_name : 'Gauranga',
    last_name : 'Das',
    age : 19,
    job : 'Software Engineer',
    calc_age : function(birth_year) {
        return 2020-birth_year;
    },
    full_name : function() {
        return this.first_name + ' ' + this.last_name;
    }
};
console.log(jonas);

console.log(jonas.calc_age(1999));
console.log(jonas['calc_age'](1999));

console.log(jonas.full_name());