// let myValue = 30;

// for(let i = 5; i < 9; i++) {
//     myValue += 2;
// }

// console.log(myValue)

// const arr = new Array(20).fill(0);

// console.log(arr)

// const reverse = (arr = [], inc = 1) => {
//     const increment = (inc = 1) => (n) => n + inc;
//     return arr.slice().reverse().map(increment(inc))
// // }

// // console.log(reverse([1, 2, 3, 4, 5], 2))
// // console.log(reverse([1, 2, 3, 4, 5], 2))
// // console.log(reverse([1, 2, 3, 4, 5], 2))
// // console.log(reverse([5,4,3,2]))
// // console.log(reverse([5,4,3,2]))

// console.log([1, 2, 3, 4, 5].map((num) => num + 2).reverse())

// if( 8 && 7 === '7') {
//     console.log("Bacon")
// } else if (7 === '7' || 8) {
//     console.log("Lettuce")
// } else {
//     console.log("tomato")
// }

// console.log(7 === 8)

const source = 'Convert to snakecase'.split('')
console.log(source)

const source2 = source.reduce((acc, curr) => {
    if(curr === " ") {
        acc += "_"
    } else {
        acc += curr.toLowerCase()
    }
    return acc
}, "")

console.log(source2)

// const newSource = source.map((num) => {
//     return num + 1
// })

// const source2 = source.reduce((acc, curr) => {
//     if((curr + 3) % 2 === 0) {
//         acc.push(curr)
//     }
//     return acc
// }, [])






// const filterSource = source.filter((num) => {
//     return num % 3 === 0
// })

// console.log(filterSource)

// console.log((('ba' + + 'a') + "a"))

// const arr = new Array(2).fill(null)
// console.log(`Aspi${arr.pop()}tions`)

while(i <= chars.length) {
    output += String.fromCharCode(chars[i])
    i++
}