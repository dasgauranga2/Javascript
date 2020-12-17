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

// destructuring objects
// on the left-hand side the variables refer to 
// the exact name of the properties of objects
// the 'name' variable below will contain the value of 'name' property in 'restaurant' object
const {name,openingHours,categories} = restaurant;
console.log(name,categories);

// we could refer to the properties of the object 
// by different names
// the 'rest_name' variable below will contain the value of 'name' property in 'restaurant' object
const {name:rest_name,openingHours:hours,categories:tags} = restaurant;
console.log(rest_name,tags);

let a=111,b=999;
const obj = {a:23, b:7, c:14};
// swap the values of variables 'a' and 'b' 
// with the values in the object
({a,b} = obj);
console.log(a,b);