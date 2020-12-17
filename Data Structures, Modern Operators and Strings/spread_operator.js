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

const arr = [5,6,7,8];
// the spread operator '...' expands all the values of an iterable
// 'new_arr' will contain the value '[1,2,5,6,7,8]'
const new_arr = [1,2,...arr];
console.log(new_arr);

// the spread operator can be used to create a copy of an array
const mm = [...restaurant.mainMenu];
console.log(mm);

// we can also use the spread operator with multiple arrays 
// 'menu' will contain 
// the value '['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad','Pizza', 'Pasta', 'Risotto']'
const menu = [...restaurant.starterMenu,...restaurant.mainMenu];
console.log(menu);