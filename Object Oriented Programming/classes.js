'use strict';

// defining a class
class Person {
    // constructor for the class
    constructor(first_name, birth_year) {
        this.first_name = first_name;
        this.birth_year = birth_year;
    }

    // methods of the class
    calc_age() {
        console.log(2020-this.birth_year);
    }
}

// create a new object of the class
const jonas = new Person('Jonas', 1996);

console.log(jonas);
jonas.calc_age();