'use strict';

class Person {
    constructor(first_name, birth_year) {
        this.first_name = first_name;
        this.birth_year = birth_year;
    }
    // getter method
    get age() {
        return 2020-this.birth_year;
    }
}

const jonas = new Person('Jonas', 1996);

// getter method
// we can use the method as a property of the object
console.log(jonas.age);