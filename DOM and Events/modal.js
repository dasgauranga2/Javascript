'use strict';

// select the modal html element
// this will display the message
const modal = document.querySelector('.modal');
// select the overlay html element
// this will blur the background when one of the button is clicked
const overlay = document.querySelector('.overlay');
// select the button for closing the modal
const btn_close_modal = document.querySelector('.close-modal');
// select all the buttons for displaying the modal message
const btn_open_modal = document.querySelectorAll('.show-modal');

for(let i=0; i<btn_open_modal.length; i++) {
	// add an event listener to each button to detect button click
	btn_open_modal[i].addEventListener
	('click', function() {
		// each html element has a 'class' attribute that contains multiple class names
		// each class name defines the css properties of that html element
		// 'classList' returns a list of all the class names
		// here we remove a class name from the 'classList' 
		// therefore that html element will no longer have the css properties defined by that class name
		modal.classList.remove('hidden');
		overlay.classList.remove('hidden');
	});
}

btn_close_modal.addEventListener
('click', function() {
	// here we add a class name to the 'classList' 
	// therefore that html element will now have all the css properties defined by that class name
	modal.classList.add('hidden');
	overlay.classList.add('hidden');
});
