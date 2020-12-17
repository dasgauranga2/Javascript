'use strict';

// create a new set
// set is a collection of values
// it cannot contain duplicate values 
const orders = new Set(['Pasta','Pizza','Burger','Pizza']);

console.log(orders);

// total number of values in the set
console.log(orders.size);

// check whether a value is present in the set
console.log(orders.has('Pizza'));
console.log(orders.has('Bread'));

// add a value to the set
orders.add('Garlic Bread');
console.log(orders);

// remove a value from the set
orders.delete('Pasta');
console.log(orders);

// looping through the values of a set
for(const order of orders) {
	console.log(order);
}

