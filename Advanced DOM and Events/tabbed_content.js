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

const buttons = document.querySelectorAll('.buttons button');
const contents = document.querySelectorAll('.content p');

for(const content of contents) {

    content.style.display = 'none';
}
contents[0].style.display = 'block';


for(const button of buttons) {
    button.addEventListener('click', function(event) {

        const button_id = event.target.id;

        for(const content of contents) {

            content.style.display = 'none';
        }

        for(const content of contents) {

            if (content.id === button_id) {
                content.style.display = 'block';
            }
        }
    });
}

