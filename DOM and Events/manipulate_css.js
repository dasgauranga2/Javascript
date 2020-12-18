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

// detect a button click
document.querySelector('.check').addEventListener
('click', function() {

	// we first select the html element using the 'querySelector' method
	// then we use the 'style' property to manipulate the css properties of the selected element
	// then we select the css property that we want to change
	// here we want to change the background colour
	document.querySelector('body').style.backgroundColor = '#65b6f0';
});