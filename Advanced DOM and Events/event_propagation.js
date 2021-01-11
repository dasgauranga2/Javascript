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

// since 'links' is the parent element
// when it is clicked only the callback function
// of this element below will be called
document.querySelector('.links').addEventListener('click', function(e) {
    // target refers to the element clicked
    console.log("LINKS CLICKED", e.target);
});

// since 'link' is the child element
// when it is clicked 
// it's callback function below is called
// but, due to bubbling the callback function
// of it's parent element above is also called
document.querySelector('.link').addEventListener('click', function(e) {
    // target refers to the element clicked
    console.log("LINK CLICKED", e.target);
});
