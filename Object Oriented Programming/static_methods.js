'use strict';

class Person {
    constructor(first_name, birth_year) {
        this.first_name = first_name;
        this.birth_year = birth_year;
    }

    // static method 
    // static methods are defined for the class itself
    // they are not defined for an object
    static hey() {
        console.log("HELLO");
        console.log(this);
    }
}

// to call a static method we cannot use an object
// we have to use the class name
Person.hey();