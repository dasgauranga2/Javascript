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

// 'Object.entries' returns an array of key-value pairs of the object's properties
// each key-value pair is an array of two elements
// the first element is the name of the property
// the second element contains the value of the property
const days = Object.entries(restaurant.openingHours);
console.log(days);

// looping through object properties
for (const [key,value] of days) {
	// 'key' is property name
	// 'value' is property value
	console.log(key,value);
}
