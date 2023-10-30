// get match Date, get now Date, make the diff, get also time
// format 11/10/2022
// add hour to obj

// Given date and time
const givenDate = '11/10/2022';
const givenTime = '22:00';

// Parse the given date and time
const givenDateTime = new Date(`${givenDate} ${givenTime}`);

// Get the current date and time
const currentDate = new Date();

// Calculate the time difference in milliseconds
const timeDifferenceInMilliseconds = currentDate - givenDateTime;

// Convert milliseconds to hours
const hoursPassed = timeDifferenceInMilliseconds / (1000 * 60 * 60);

console.log(`Hours passed: ${hoursPassed}`);