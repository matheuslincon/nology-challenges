const delayedIncDec = (n, mode, delay = 2500) => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            if(typeof n !== 'number') {
                rej(`n must be a number -> ${n}`)
            }
            
            if(mode === 'inc') {
                n++
                res(n)
            } else if(mode === 'dec') {
                n--
                res(n)
            } else {
                rej(`invalid mode input -> ${mode}`)
            }
        }, delay)
    })
}

delayedIncDec(2, 'inc')
    .then((val) => {
        console.log(val)
    }).catch((e) => {
        console.log(e)
    })

delayedIncDec(4, 'dec')
    .then((val) => {
        console.log(val)
    }).catch((e) => {
        console.log(e)
    })

delayedIncDec(-2, 'inc')
    .then((val) => {
        console.log(val)
    }).catch((e) => {
        console.log(e)
    })

delayedIncDec("p", 'dec')
    .then((val) => {
        console.log(val)
    }).catch((e) => {
        console.log(e)
    })

delayedIncDec(5, 'xxx')
    .then((val) => {
        console.log(val)
    }).catch((e) => {
        console.log(e)
    })
// MVP

// Create a function called delayedIncDec(n, mode, delay) - this function needs to return a promise<number>,
// the value of the promise should be n after incrementing or decrementing depending on the mode

// if mode is anything other than inc or dec - reject the promise

// n - some number

// mode - string - "inc", "dec"

// inc will cause the function to increment n by 1

// dec will cause the function to decrement by 1

// timeout - delay in ms - your function will return a promise after that time

// timeout should have a default value, if the function is called without the 3rd argument, it should default to 2500

// call this function three times with different numbers and values of dec and delay
// console.log the value of rejected or resolved promise