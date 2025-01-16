//! Async Code in Action
//* Write 4 console logs without any gap
// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)

//* In the middle write a callback function that waits 2 sec
// console.log(1)
// console.log(2)

// setTimeout( () => console.log('callback function fired'), 2000)

// console.log(3)
// console.log(4)

//! What are HTTP Requests
//* Go to `https://jsonplaceholder.typicode.com/` and run the demo script on the site. Than copy the link and visit it

//! Making HTTP Requests (XHR)
//* A Create a new Request Object
const request = new XMLHttpRequest()

//* C In the console's network section we can see we got the response. Now show it in the window. But first log the ready states of the request
// request.addEventListener('readystatechange', () => {
//     console.log(request, request.readyState)
// })

//* D When the state is in `done` stage, use the state to log the response text
// request.addEventListener('readystatechange', () => {
//     if (request.readyState === 4) {
//         console.log(request.responseText)
//     }
// })

//! Response Status

//* E Try to request from an none exitent object. See the output
// request.addEventListener('readystatechange', () => {
//     if (request.readyState === 4) {
//         console.log(request, request.responseText)
//     }
// })

//* F As we can see the ready state is reaching state 4 even though there is an error. To fix it add another condition of status == 200 to the request
// request.addEventListener('readystatechange', () => {
//     if (request.readyState === 4 && request.status === 200) {
//         console.log(request, request.responseText)
//     }
// })

//* G What if you got the data but something is not right ( only ready state === 4), how would you handel it
// request.addEventListener('readystatechange', () => {
//     if (request.readyState === 4 && request.status === 200) {
//         console.log(request, request.responseText)
//     } else if (request.readyState === 4) {
//         console.log('Could not fetch the data')
//     }
// })

//* B Using the request object, get all the objects from `https://jsonplaceholder.typicode.com/`
// request.open('GET', 'https://jsonplaceholder.typicode.com/todosX/')
// request.send()

//! Callback Functions

//* H Create an arrow function, put everything inside it. Now call it. It should fetch the data
// const getTodos = () => {
//     const request = new XMLHttpRequest()

//     request.addEventListener('readystatechange', () => {
//         if (request.readyState === 4 && request.status === 200) {
//             console.log(request, request.responseText)
//         } else if (request.readyState === 4) {
//             console.log('Could not fetch the data')
//         }
//     })
    
//     request.open('GET', 'https://jsonplaceholder.typicode.com/todos/')
//     request.send()
// }

// getTodos()

//* I Pass callback via the arrow function for both outcome(error & data)
// const getTodos = (callback) => {
//     const request = new XMLHttpRequest()

//     request.addEventListener('readystatechange', () => {
//         if (request.readyState === 4 && request.status === 200) {
//             callback()
//         } else if (request.readyState === 4) {
//             callback()
//         }
//     })
    
//     request.open('GET', 'https://jsonplaceholder.typicode.com/todos/')
//     request.send()
// }

// getTodos(() => console.log('Callback Fired'))

//* J Now pass data & error via callback with appropriate response.
// const getTodos = (callback) => {
//     const request = new XMLHttpRequest()

//     request.addEventListener('readystatechange', () => {
//         if (request.readyState === 4 && request.status === 200) {
//             callback(undefined, request.responseText)
//         } else if (request.readyState === 4) {
//             callback('Could not fetch data', undefined)
//         }
//     })
    
//     request.open('GET', 'https://jsonplaceholder.typicode.com/todosX/')
//     request.send()
// }

// getTodos((err, data) => {
//     console.log(err, data)
// })

//* Try to request from an none exitent object. See the output
// const getTodos = (callback) => {
//     const request = new XMLHttpRequest()

//     request.addEventListener('readystatechange', () => {
//         if (request.readyState === 4 && request.status === 200) {
//             callback(undefined, request.responseText)
//         } else if (request.readyState === 4) {
//             callback('Could not fetch data', undefined)
//         }
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
//         if (request.readyState === 4 && request.status === 200) {
//             callback(undefined, request.responseText)
//         } else if (request.readyState === 4) {
//             callback('Could not fetch data', undefined)
//         }
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
// const getTodos = (callback) => {
//     const request = new XMLHttpRequest()

//     request.addEventListener('readystatechange', () => {
//         if (request.readyState === 4 && request.status === 200) {
//             callback(undefined, request.responseText)
//         } else if (request.readyState === 4) {
//             callback('Could not fetch data', undefined)
//         }
//     })
    
//     request.open('GET', 'https://jsonplaceholder.typicode.com/todos/')
//     request.send()
// }

// console.log(1)
// console.log(2)

// getTodos((err, data) => {
//     console.log('Callback Fired')
//     if (err) {
//         console.log(err)
//     } else {
//         console.log(data)
//     }
// })

// console.log(3)
// console.log(4)

//! JSON Data

//* We have been getting a JSON string till now. Convert it to an array
// const getTodos = (callback) => {
//     const newRequest = new XMLHttpRequest()

//     newRequest.addEventListener('readystatechange', () => {
//         if (newRequest.readyState === 4 && newRequest.status === 200) {
//             const data = JSON.parse(newRequest.responseText)
//             callback(undefined, data)
//         } else if(newRequest.readyState === 4){
//             callback('💥', undefined)
//         }
//     })

//     newRequest.open('GET', 'https://jsonplaceholder.typicode.com/todos')
//     newRequest.send()
// }

// getTodos((error, data) => {
//     if (error) {
//         console.log(error)
//     } else {
//         console.log(data)
//     }
// })

//* Create a folder, inside it 3 json files with demo text

//* Insted of the link, log request data from 1st JSON file
// const getTodos = (callback) => {
//     const request = new XMLHttpRequest()

//     request.addEventListener('readystatechange', () => {
//         if (request.readyState === 4 && request.status === 200) {
//             const data = JSON.parse(request.responseText)
//             callback(undefined, data)
//         } else if (request.readyState === 4) {
//             callback('Could not fetch data', undefined)
//         }
//     })
    
//     request.open('GET', './todos/a.json')
//     request.send()
// }

// getTodos((err, data) => {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log(data)
//     }
// })

//! Callback Hell

//* Insted of the link, log request data from 1 file after another
// const getTodos = (resource, callback) => {
//     const request = new XMLHttpRequest()

//     request.addEventListener('readystatechange', () => {
//     if (request.readyState === 4 && request.status === 200) {
//         const data = JSON.parse(request.responseText)
//         callback(undefined, data)
//     } else if (request.readyState === 4) {
//         callback('Could not fetch data', undefined)
//     }
// })
    
//     request.open('GET', resource)
//     request.send()
// }

// getTodos('./todos/a.json', (err, data) => {
//     console.log(data)
//     getTodos('./todos/m.json', (err, data) => {
//         console.log(data)
//         getTodos('./todos/q.json', (err, data) => {
//             console.log(data)
//         })
//     })
// })

//! Promise

//* Nesting requests can get messy. Try promise insted to log data
// const getTodos = (resource, callback) => {
//     return new Promise((resolve, reject) => {
//         const request = new XMLHttpRequest()

//         request.addEventListener('readystatechange', () => {
//             if (request.readyState === 4 && request.status === 200) {
//             const data = JSON.parse(request.responseText)
//             resolve(data)
//         } else if (request.readyState === 4) {
//             reject('some error')
//         }
// })
    
//     request.open('GET', resource)
//     request.send()
//     })

// }

// getTodos('./todos/a.json').then(data => {
//     console.log("Promise Resolved: ", data)
// }).then(err => {
//     console.log("Promise Rejected: ", err)
// })

//* Create a variable that returns a promise
// const getSomething = () => {
//     return new Promise((resolve, reject) => {
//         // resolve('Some Data')
//         reject('Some Error')
//     })
// }

//* Test the variable for a resolved promise
// getSomething().then((data) => {
//     console.log(data)
// })

//* Test the variable for a rejected promise
// getSomething().then((data) => {
//     console.log(data)
// }, (error) => {
//     console.log(error)
// })

//* Adding 2 or more functions as arguments into the then method it could be a bit messy. Have you tried catching the error?
// getSomething().then((data) => {
//     console.log(data)
// }).catch(error => {
//     console.log(error)
// })

//* We have been using dummy text till now. Lets log the todo data using Promise
const getTodos = (resource, callback) => {
    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest()

        request.addEventListener('readystatechange', () => {
            if (request.readyState === 4 && request.status === 200) {
            const data = JSON.parse(request.responseText)
            resolve(data)
        } else if (request.readyState === 4) {
            reject('some error')
        }
})
    request.open('GET', resource)
    request.send()
    })
}

// getTodos('./todos/a.json').then((data) => {
//     console.log("Promise Resolved: ", data)
// }).catch(error => {
//     console.log("Promise Rejected", error)
// })

//* Use promise the log other 2 data sets
// getTodos('./todos/m.json')
//     .then(data => console.log("Promise Resolved: ", data))
//     .catch(error => console.log("Promise Rejected ", error))

// getTodos('./todos/q.json')
//     .then(data => console.log(data))
//     .catch(error => console.log(error))

//! Chaining Promises

//* Now chain those promices together
// getTodos('./todos/a.json').then(data => {
//     console.log("Promise 1 Resolved: ", data)
//     return getTodos('./todos/m.json')
// }).then(data => {
//     console.log('Promise 2 Resolved: ', data)
//     return getTodos('./todos/q.json')
// }).then(data => {
//     console.log('Promise 3 Resolved: ', data)
// }).catch(error => {
//     console.log("Promise Rejected", error)
// })

//! The Fetch API

//* Use fetch to log data from the JSON files
// fetch('./todos/a.json').then((response) => {
//     console.log('resolved', response)
// }).catch((error) => {
//     console.log('rejected', error)
// })

//* Try to fetch from a non exitend files, check the status
// fetch('./todos/aX.json').then((response) => {
//     console.log('resolved', response)
// }).catch((error) => {
//     console.log('rejected', error)
// })

//* Log the data from the 1st JSON file
fetch('./todos/a.json').then((response) => {
    return response.json()
}).then(data => {
    console.log(data)
}).catch((error) => {
    console.log('rejected', error)
})

