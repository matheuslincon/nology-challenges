// const okButton = document.getElementsByClassName('button--important');

const myFunction = (arr) => {
    return arr.reduce((acc, value) => {
        return value ? ++acc : acc;
    }, 0)
}

// console.log(myFunction([1,2,3,4,5, 6, 1, 8, 4]))


const myFunctiontwo = (arr) => {
    return arr.reduce((acc, curr, index, arr) => {
        if(curr === arr[index + 1]){
            ++acc
        } else {
            acc
        }
        return acc;
    }, 0);
}

// console.log(myFunctiontwo([1,1,3,4,5]))

const coach = {};

coach.name = 'remi'
coach.age = 23
coach.name = 'callum'
coach.age += 7

// console.log(coach)

// const entries = Object.entries(input);

// const output = entries.reduce((acc, curr) => {
//     acc[curr[1]] = curr[0];
//     return acc
// }, {})

// console.log(coach2)

const coach3 = Object.keys(coach).map((val) => {
    return val.toUpperCase();
})

console.log(coach3)

const getBreeds = async () => {
    const response = await fetch('https://catfact.ninja/breeds');
    return await response.json();
}

console.log(getBreeds())