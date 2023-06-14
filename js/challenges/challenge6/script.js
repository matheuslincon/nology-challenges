// You have an array of names all in lowercase you want a new array with all names but uppercase

const names = ["david", "inga", "matheus"]

const uppercaseNames = names.map(name => name.toUpperCase())

console.log(uppercaseNames)
// You have an array of numbers, you want a new array with each number decremented by 5

const numbers = [10, 9, 8, 7, 6,]

const newNumbers = numbers.map(num => num - 5)

console.log(newNumbers)