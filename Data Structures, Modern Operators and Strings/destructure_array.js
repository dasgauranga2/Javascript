'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
};

const nums = [2,3,4];
// destructuring arrays
// the variables a,b,c will store the value of the three elements of the array
// in the order they are declared
// a=2,b=3,c=4
const [a,b,c] = nums;
console.log(a,b,c);

let first,second,third;
// 'first' and 'second' will store the value of
// the first and second element of the array
[first,second] = restaurant.categories;
console.log(first,second);
// 'first' and 'third' will store the value of
// the first and third element of the array
[first,,third] = restaurant.categories;
console.log(first,third);

let x=2,y=5;
console.log(x,y);
// swap the values of the two variables
[y,x] = [x,y];
console.log(x,y);