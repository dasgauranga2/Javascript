'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

// the 'querySelector' method selects a html element
// we specify the CSS selector name of the element
// below we select the element with class 'header'
const header = document.querySelector('.header');
console.log(header);

// the 'querySelectorAll' method selects all html elements with 
// the specified CSS selector name 
// below we select all elements with class 'section'
const sections = document.querySelectorAll('.section');
console.log(sections);

// select a html element 
// by specifying the id of the element
// below we select an element with id 'heading'
const heading = document.getElementById('heading');
console.log(heading);

// create a html element
// we specify the tag name of the element in the method
// below we create a <div> element
const message = document.createElement('div');
// set the inner html of the element
message.innerHTML = 'HELLO WORLD';
// add the html element as the child element of another html element
//heading.prepend(message);
// add the html element as the child element of another html element
//heading.append(message);
// add the html element exactly before another element
//heading.before(message);
// add the html element exactly before another element
//heading.after(message);

// delete a html element
sections[2].remove();

