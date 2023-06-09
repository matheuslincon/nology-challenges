// # Function Challenges

// ## Challenge: Calculating Moon Orbits

// MVP
// Write a function that takes in a number of earth days, and returns the number of orbits the moon can perform given days.

// ```
// moonOrbits(54) => 2
// moonOrbits(365) => 13.359
// ```

const moonOrbits = (earthDays) => {
    const numberOfDaysMoonOrbitEarth = 27;
    return Math.round(earthDays / numberOfDaysMoonOrbitEarth)
}

console.log(moonOrbits(54))

// ## Challenge: Working with Circles

// MVP
// Write a function that takes the radius of a circle and return its area.
// Write a function that takes the radius of a circle and return its perimeter.

// ```
// circleArea(10) => 314.16
// circlePerimeter(10) => 62.83
// ```

const circleArea = (r) => {
    return (Math.PI * (r ** 2)).toFixed(2)
}

const circlePerimeter = (r) => {
    return (2 * Math.PI * r).toFixed(2)
}

console.log(circleArea(10))
console.log(circlePerimeter(10))


// ## Challenge: Years to Days & Seconds

// MVP
// Create a function that takes your age in years and returns your age in days.
// Create a function that takes your age in years and returns your age in seconds.

// ```
// ageInDays(32) => 11680
// ageInSeconds(32) => 1009152000
// ```

const ageInDays = (age) => {
    return age * 365
}

const ageInSeconds = (age) => {
    return ageInDays(age) * 86400
}

console.log(ageInDays(32))
console.log(ageInSeconds(32))

// ## Challenge: Return the Remainder from Two Numbers

// MVP
// There is a single operator in JavaScript, capable of providing the remainder of a division operation. Two numbers are passed as parameters. The first parameter divided by the second parameter will have a remainder, possibly zero. Return that value.

// ```
// remainder(1, 3) ➞ 1
// remainder(3, 4) ➞ 3
// remainder(-9, 45) ➞ -9
// remainder(5, 5) ➞ 0
// ```

const remainder = (num1, num2) => {
    return num1 % num2
}

console.log(remainder(5, 5))

// ## Challenge: Basketball Points

// MVP
// You are counting points for a basketball game, given the amount of 2-pointers scored and 3-pointers scored, find the final points for the team and return that value.

const basketPoints = (twoPointers, threePointers) => {
    return (2 * twoPointers) + (3 * threePointers)
}

console.log(basketPoints(10, 10))

// ## Challenge: Less Than 100?

// MVP
// Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.

// ```
// lessThan100(22, 15) ➞ true
// // 22 + 15 = 37
// lessThan100(83, 34) ➞ false
// // 83 + 34 = 117
// lessThan100(3, 77) ➞ true
// ```

const lessThan100 = (num1, num2) => {
    return num1 + num2 < 100
}

console.log(lessThan100(83, 34))