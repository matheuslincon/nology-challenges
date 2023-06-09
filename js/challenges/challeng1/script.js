// Challenge: Working with ages

// MVP
// Create a variable that contains your age
// Add 10 to your age variable and log the output to the console
// Subtract 7 from your age variable and log the output to the console
// Multiple your age variable by 11 and log the output to the console

const myAge = 28;

console.log(myAge + 10);
console.log(myAge - 7);
console.log(myAge * 11);

// Challenge: Calculating Moon Rotations

// MVP
// Create two variables
// The first for the number of earth days. (You can choose any number of days)
// One to hold the number of earth days it takes for the moon to rotate.
// Log the number of rotations of the moon given the number of earth days you specified

const numberOfDaysOnEarth = 10346;
let numberOfDaysMoonRotation = 29.5;

console.log(Math.round(numberOfDaysOnEarth / numberOfDaysMoonRotation));

// Challenge: Calculating Moon Orbits

// MVP
// Create another variable to store the number of earth days it takes for the moon to orbit the earth
// Log the number of orbits the moon can do, given the number of earth days

const numberOfDaysMoonOrbitEarth = 27;

console.log(Math.round(numberOfDaysOnEarth / numberOfDaysMoonOrbitEarth));
