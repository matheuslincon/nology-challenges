// # Array Challenges

// ## Challenge: Listing Hobbies

// MVP
// Create an array with 3 of your hobbies
// Print in the console the first hobby in the array
// Remove that first hobby from the array and store that hobby in a variable
// Store the length of the array in a variable
// Add another hobby at the end of the array
// Print that last hobby in the console
// Bonus:

// Join all your hobbies in a single string each hobby being comma separated (i.e. "My hobbies are: hobby1, hobby2, hobby2")

const hobbiesArray = ["CsGO", "Cooking", "Soccer"];
console.log(hobbiesArray[0]);

const firstHobby = hobbiesArray.shift();

const hobbiesArrayLength = hobbiesArray.length;

hobbiesArray.push("Tennis");

console.log(hobbiesArray[hobbiesArray.length - 1]);

console.log(`My hobbies are: ${hobbiesArray.join(", ")}`);

// ## Challenge: Grocery Lists

// MVP
// Create an array containing 5 grocery items you often buy
// Log this list to the console, make sure the output is pipe delimited
// ['apple', 'pear', 'papaya', 'mango'] => 'apple|pear|papaya|mango'

const groceryArray = ["Doritos", "Sparkling water", "Chocolate", "Milk", "Bread"];

console.log(groceryArray.join("|"));

// # Loops challenges

// ## Challenge: Sum of n

// MVP:
// Create a function with a for loop that will add all the numbers up to n

// You should create a variable to set the upper limit of your loop
// Your loop should increment by 1 on each iteration
// Your loop should print the final result

// ```
// sum(10) => 55
// ```

const sum = (n) => {
    let sum = 0;
    for(let i = 0; i <= n; i++) {
        sum += i;
    }
    return sum;
};

console.log(sum(10))

// ## Challenge: Write a shopping list

// MVP:
// Create a function with a for loop that will add numbers to your shopping list

// Store the following array in a variable
// Your loop should iterate through every value in the array
// Your loop should print a shopping list with the number and the name of the item

// ```
// ['milk', 'watermelon', 'eggs', 'soap', 'butter', 'apples', 'ice-cream'];
// =>
// // In Console
// 1. milk
// 2. watermelon
// 3. eggs
// 4. soap
// 5. butter
// 6. apples
// 7. ice-cream
// ```

const groceries = ['milk', 'watermelon', 'eggs', 'soap', 'butter', 'apples', 'ice-cream'];

const groceriesLoop = () => {
    for(let i = 0; i < groceries.length; i++) {
        console.log(`${i + 1}. ${groceries[i]}`);
    }
}

groceriesLoop()

// ## Challenge: Capitalizing Odd Positioned Letters

// MVP
// Create a variable with a string of your choice
// Loop through the letters in this string and build a new string
// If the current index is odd, capitalize the letter before adding it to the new string
// Bonus
// If the current index is even increment the letter
// E.g: a becomes b, d becomes e, t becomes u
// Final: z becomes a

function getNextChar(char) {
    if (char === 'z') {
        return 'a';
    }

    if (char === 'Z') {
        return 'A';
    }

    return String.fromCharCode(char.charCodeAt(0) + 1);
}

const capOddLetters = (str) => {
    let newStr = [];
    for(let i = 0; i < str.length; i++) {
        if(i % 2 !== 0){
            newStr.push(str[i].toUpperCase())
        } else {
            newStr.push(getNextChar(str[i]))
        }
    }
    return newStr.join("")
}

console.log(capOddLetters("matheuz"));

// # Challenge: Removing Vowels

// MVP
// Create a variable with a string of your choice
// Loop through the letters in this and build a new string
// The new strings should be the same as the input with the vowels missing

// ```
// E.g: calum => clm, rachel => rchl, martyna => mrtyn
// ```

// Bonus
// Keep vowels in the new strings if they are succeeded by the letters l, m, or r

// ```
// E.g: calum => calum, rachel => rchel, martyna => martyn
// ```

const noVowels = (str) => {
    let newStr = ""
    for(let i = 0; i < str.length; i++) {
        if(!/[aeiou]/gi.test(str[i])) {
            newStr+= str[i]
        }
    }
    return newStr
}

console.log(noVowels("Matheus"))

// ## Loop through an array backwards

// Console.log() every element from the array