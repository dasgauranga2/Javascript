 'use strict';

// create a date
const now = new Date();
console.log(now);

// get the year
console.log(now.getFullYear());
// get the month
console.log(now.getMonth());
// get the date
console.log(now.getDate());

// create a date by specifying the year,month,date,hour,minutes,seconds
const new_date = new Date(2020,11,6,8,45,17);
console.log(new_date);