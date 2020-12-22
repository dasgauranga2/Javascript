'use strict';

// setTimeout() method calls a function after a specified number of milliseconds
// first parameter is the function to be called
// second parameter is the no. of milliseconds to wait before calling the function
// parameters after the second parameter are parameters that will be passed to the function to be called
setTimeout(
	function(name,age) { 
		console.log(`NAME : ${name}    AGE : ${age}`); },
	2000, 
	"Gauranga", 
	22);

// setInterval() method calls a function at specified intervals
// it will continue calling the function until clearInterval() is called
setInterval(
	function() { 
		const now = new Date();
		console.log(now); },
	4000);