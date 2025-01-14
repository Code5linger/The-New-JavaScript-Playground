//* Write 4 console logs without any gap

//* In the middle write a callback function that waits 2 sec
// console.log(1)
// console.log(2)

// setTimeout( () => console.log('callback function fired'), 2000)

// console.log(3)
// console.log(4)

//* Go to `https://jsonplaceholder.typicode.com/` and run the demo script on the site. Than copy the link and visit it



//* A Create a new Request Object
// const request = new XMLHttpRequest()

//* C In the console's network section we can see we got the response. Now show it in the window. But first log the states of the request
// request.addEventListener('readystatechange', () => {
//     // console.log(request, request.readyState)
// })

//* D When the state is in `done` stage, use the state to log the response text
// request.addEventListener('readystatechange', () => {
//     // console.log(request, request.readyState)
//     if (request.readyState === 4) {
//         console.log(request.responseText)
//     }
// })

//* E Try to request from an none exitent object. See the output
// request.addEventListener('readystatechange', () => {
//     // console.log(request, request.readyState)
//     if (request.readyState === 4) {
//         console.log(request, request.responseText)
//     }
// })

//* F As we can see the ready state is reaching state 4 even though there is an error. To fix it add another condition of status == 200 to the request
// request.addEventListener('readystatechange', () => {
//     // console.log(request, request.readyState)
//     if (request.readyState === 4 && request.status === 200) {
//         console.log(request, request.responseText)
//     }
// })

//* G What if you got the data but something is not right ( only ready state === 4), how would you handel it
// request.addEventListener('readystatechange', () => {
//     // console.log(request, request.readyState)
//     if (request.readyState === 4 && request.status === 200) {
//         console.log(request, request.responseText)
//     } else if (request.readyState === 4) {
//         console.log('Could not fetch the data')
//     }
// })


//* B Using the request object, get all the objects from `https://jsonplaceholder.typicode.com/`
// request.open('GET', 'https://jsonplaceholder.typicode.com/todoXs/')
// request.send()

//* H Create an arrow function, put everything inside it. Now call it. It should fetch the data
// const getTodos = () => {
//     const request = new XMLHttpRequest()

//     request.addEventListener('readystatechange', () => {
//     // console.log(request, request.readyState)
//     if (request.readyState === 4 && request.status === 200) {
//         console.log(request, request.responseText)
//     } else if (request.readyState === 4) {
//         console.log('Could not fetch the data')
//     }
//     })
    
//     request.open('GET', 'https://jsonplaceholder.typicode.com/todos/')
//     request.send()
// }

// getTodos()

//* I Pass callback via the arrow function.
// const getTodos = (callback) => {
//     const request = new XMLHttpRequest()

//     request.addEventListener('readystatechange', () => {
//     // console.log(request, request.readyState)
//     if (request.readyState === 4 && request.status === 200) {
//         callback()
//     } else if (request.readyState === 4) {
//         callback()
//     }
//     })
    
//     request.open('GET', 'https://jsonplaceholder.typicode.com/todos/')
//     request.send()
// }

// getTodos(() => console.log('Callback Fired'))

//* J Now pass data & error via callback with appropriate response
// const getTodos = (callback) => {
//     const request = new XMLHttpRequest()

//     request.addEventListener('readystatechange', () => {
//     // console.log(request, request.readyState)
//     if (request.readyState === 4 && request.status === 200) {
//         callback(undefined, request.responseText)
//     } else if (request.readyState === 4) {
//         callback('Could not fetch data', undefined)
//     }
//     })
    
//     request.open('GET', 'https://jsonplaceholder.typicode.com/todos/')
//     request.send()
// }

// getTodos((err, data) => {
//     console.log('Callback Fired')
//     console.log(err, data)
// })

//* Try to request from an none exitent object. See the output
// const getTodos = (callback) => {
//     const request = new XMLHttpRequest()

//     request.addEventListener('readystatechange', () => {
//     // console.log(request, request.readyState)
//     if (request.readyState === 4 && request.status === 200) {
//         callback(undefined, request.responseText)
//     } else if (request.readyState === 4) {
//         callback('Could not fetch data', undefined)
//     }
//     })
    
//     request.open('GET', 'https://jsonplaceholder.typicode.com/todoXs/')
//     request.send()
// }

// getTodos((err, data) => {
//     console.log('Callback Fired')
//     console.log(err, data)
// })

//* Now filter the response inside the callback function
// const getTodos = (callback) => {
//     const request = new XMLHttpRequest()

//     request.addEventListener('readystatechange', () => {
//     // console.log(request, request.readyState)
//     if (request.readyState === 4 && request.status === 200) {
//         callback(undefined, request.responseText)
//     } else if (request.readyState === 4) {
//         callback('Could not fetch data', undefined)
//     }
//     })
    
//     request.open('GET', 'https://jsonplaceholder.typicode.com/todos/')
//     request.send()
// }

// getTodos((err, data) => {
//     console.log('Callback Fired')
//     if (err) {
//         console.log(err)
//     } else {
//         console.log(data)
//     }
// })

//* Add 2 logs before & after the callback function
const getTodos = (callback) => {
    const request = new XMLHttpRequest()

    request.addEventListener('readystatechange', () => {
    // console.log(request, request.readyState)
    if (request.readyState === 4 && request.status === 200) {
        callback(undefined, request.responseText)
    } else if (request.readyState === 4) {
        callback('Could not fetch data', undefined)
    }
    })
    
    request.open('GET', 'https://jsonplaceholder.typicode.com/todos/')
    request.send()
}

console.log(1)
console.log(2)

getTodos((err, data) => {
    console.log('Callback Fired')
    if (err) {
        console.log(err)
    } else {
        console.log(data)
    }
})

console.log(3)
console.log(4)