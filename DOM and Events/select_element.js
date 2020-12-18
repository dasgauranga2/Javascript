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

// the 'document' object refers to the entire html webpage
// 'querySelector' method selects a html element
// in 'querySelector' method we pass the name of the class of the html element we want to select
// 'textContent' property returns the text content of the html element
const text = document.querySelector('.heading').textContent;
// display the text content of the selected html element
console.log(text);

// we select the html element using the class name
// then we change the text content of the html element
document.querySelector('.second_heading').textContent = 'Some text';

// we select an input element using the class name
// then we change the value of the input element
document.querySelector('.guess').value = 28;

// 'textContent' is used for other html elements
// 'value' is used for input element