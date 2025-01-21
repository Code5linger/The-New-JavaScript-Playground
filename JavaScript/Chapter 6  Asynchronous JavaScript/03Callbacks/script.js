//! Async Code in Action
//* Write 4 console logs without any gap
// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)

//* Write 2 logs 1st one `Starting` lst one `Ending`
// console.log('Starting')
// console.log('Ending')

//* In the middle write a callback function that waits 2 sec
// console.log(1)
// console.log(2)

// setTimeout( () => console.log('callback function fired'), 2000)

// console.log(3)
// console.log(4)

//* In the middle write a callback function that waits 2 sec
// console.log('Starting')
// setTimeout(() => console.log('Running'), 2000)
// console.log('Ending')

//* Visit this site `http://latentflip.com/loupe/` and run the previous code to see how JS handles it

//* Create a square that says `Click Me`

//* Change the text to `GO` when clicked
// const go = document.querySelector('.go')

// go.addEventListener('click', (e) => {
//     const el = e.currentTarget
//     el.textContent = 'GO'
// })
//* Make it a circle after 2 seconds
// go.addEventListener('click', (e) => {
//     const el = e.currentTarget
//     el.textContent = 'GO'

//     setTimeout(() => {
//         el.classList.add('circle')
//     }, 2000)
// })

//* Make it red after 0.5 s
// go.addEventListener('click', (e) => {
//     const el = e.currentTarget
//     el.textContent = 'GO'

//     setTimeout(() => {
//         el.classList.add('circle')
//         setTimeout(() => {
//             el.classList.add('danger')
//         },500)
//     }, 2000)
// })

//* make it square after e.25s
// go.addEventListener('click', (e) => {
//     const el = e.currentTarget
//     el.textContent = 'GO'

//     setTimeout(() => {
//         el.classList.add('circle')
//         setTimeout(() => {
//             el.classList.add('danger')
//             setTimeout(() => {
//                 el.classList.remove('circle')
//             }, 250)
//         },500)
//     }, 2000)
// })

//* make it purpee after .3s
// go.addEventListener('click', (e) => {
//     const el = e.currentTarget
//     el.textContent = 'GO'

//     setTimeout(() => {
//         el.classList.add('circle')
//         setTimeout(() => {
//             el.classList.add('danger')
//             setTimeout(() => {
//                 el.classList.remove('circle')
//                 setTimeout(() => el.classList.add('purple'), 300)
//             }, 250)
//         },500)
//     }, 2000)
// })

//* Fade out after .5s
// go.addEventListener('click', (e) => {
//     const el = e.currentTarget
//     el.textContent = 'GO'

//     setTimeout(() => {
//         el.classList.add('circle')
//         setTimeout(() => {
//             el.classList.add('danger')
//             setTimeout(() => {
//                 el.classList.remove('circle')
//                 setTimeout(() => {
//                     el.classList.add('purple')
//                     setTimeout(() => {
//                         el.classList.add('fadeOut')
//                     }, 500)
//                 }, 300)
//             }, 250)
//         },500)
//     }, 2000)
// })

//* Create an object with 2 elements. Each with title & body
// const posts = [
//     { title: "Post One", body: "This is post one"},
//     { title: "Post Two", body: "This is post Two"},
// ]

//* Write a function that wait 1 sec to add both title to page than another 1 sec for the body
// function getPosts() {
//     setTimeout(() => {
//         posts.forEach(function (post) {
//             const div = document.createElement('div')
//             div.innerHTML = `<h1><strong>${post.title}</strong></h1>`
//             setTimeout(() => {
//                 div.innerHTML += `<p>${post.body}</p>`
//             }, 1000)
//             document.querySelector('body').appendChild(div)
//         })
//     }, 1000)
// }

//* Create a function that adds a new element to the object
// function createPost(post) {
//     setTimeout(() => {
//         posts.push(post)
//     }, 2000)
// }

// createPost({ title: "Post Three", body: "This is post Three"},)

// getPosts()

//* As you can see, the element is not showing up. Fix it with callbacks
// const posts = [
//     { title: "Post One", body: "This is post one"},
//     { title: "Post Two", body: "This is post Two"},
// ]

// function getPosts() {
//     setTimeout(() => {
//         posts.forEach(function (post) {
//             const div = document.createElement('div')
//             div.innerHTML = `<h1><strong>${post.title}</strong></h1>`
//             setTimeout(() => {
//                 div.innerHTML += `<p>${post.body}</p>`
//             }, 1000)
//             document.querySelector('body').appendChild(div)
//         })
//     }, 1000)
// }

// function createPost(post, callback) {
//     setTimeout(() => {
//         posts.push(post)
//         callback()
//     }, 2000)
// }

// createPost({ title: "Post Three", body: "This is post Three"}, getPosts)

//* Declare a function, call it after 3 sec
function explode() {
    console.log('🧨💥💥')
}

// setTimeout(() => explode(), 3000)

//* Call the function every 2 sec
// setInterval(explode, 2000)

//* Create a function that takes a function & time. It calls the function immediatly than calls it on repeat based on time given
// function setImmediateInterval(functionToRun, time) {
//     functionToRun()
//     return setInterval(functionToRun, time)
// }

// setImmediateInterval(explode, 2000)

//* Create a function that replace all the content of the webpage after 5 sec
// function destroy() {
//     document.body.innerHTML = `<p>The Webpage was Destroyed!</p>`
// }

// const bombTimer = setTimeout(destroy, 5000)

//* Create a click event that reset the timer
// window.addEventListener('click', function () {
//     console.log('Website was saved by an unnamed hero!')
//     this.clearTimeout(bombTimer)
// })

//* Create function that log some text every second
// const party = setInterval(() => {
//     console.log('🎊')
//     console.log('🎉')
// }, 1000)

//* Stop logging the text
// clearInterval(party)

//* That's a bit sudden. Let's wait 5 sec, then stop
// setTimeout(() => {
//     clearInterval(party)
// }, 5000)

//* Create a function that adds text to the site after 3 sec
// function changeText() {
//     document.querySelector('.posts').textContent = 'Hello from the Other Side!'
// }

// const newTextTimer = setTimeout(() => changeText(), 3000)

//* Add an event listern to a button that prevent adding new text
// document.querySelector('button').addEventListener('click', () => {
//     console.log('No new text for you!')
//     clearTimeout(newTextTimer)
// })

//* Create a function that log current time every second
// const intervalID = setInterval(myCallback, 1000)

// function myCallback() {
//     console.log(Date.now())
// }

//* Create a button that stop the logging when pressed
// function stopChange() {
//     clearInterval(intervalID)
// }

// document.getElementById('dark').addEventListener('click', stopChange)

//* Change the theme to black & black to white every 3 second
// let intervalID

// function startChange() {
//     if (!intervalID) {
//         intervalID = setInterval(changeColor, 3000)
//     }
// }

// function changeColor() {
//     if (document.body.style.background !== 'black') {
//         document.body.style.background = 'black'
//         document.body.style.color = 'white'
//     } else {
//         document.body.style.background = 'white'
//         document.body.style.color = 'black'
//     }
// }

// startChange()

//* Create 2 buttons, pressing 1 will start changing the back, 2nd will stop
// function stopChange() {
//     clearInterval(intervalID)
// }

// document.getElementById('light').addEventListener('click', startChange)
// document.getElementById('dark').addEventListener('click', stopChange)

//* Change the background color the a random color
// let intervalID

// function startChange() {
//     if (!intervalID) {
//         intervalID = setInterval(changeRandomColor, 1000)
//     }
// }

// function changeColor() {
//     if (document.body.style.background !== 'black') {
//         document.body.style.background = 'black'
//         document.body.style.color = 'white'
//     } else {
//         document.body.style.background = 'white'
//         document.body.style.color = 'black'
//     }
// }

// function changeRandomColor() {
//     const randomColor = Math.floor(Math.random() * 16777215).toString(16)
//     document.body.style.background = `#${randomColor}`
// }

// function stopChange() {
//     clearInterval(intervalID)
// }

// document.getElementById('light').addEventListener('click', startChange)
// document.getElementById('dark').addEventListener('click', stopChange)


//! What are HTTP Requests
//* Go to `https://jsonplaceholder.typicode.com/` and run the demo script on the site. Than copy the link and visit it

//! Making HTTP Requests (XHR)
//* A Create a new Request Object
// const request = new XMLHttpRequest()

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

//* Create a function that logs each of those JSON files at random time using independent function call
// function getData(endpoint) {
//     const xhr = new XMLHttpRequest()

//     xhr.open('GET', endpoint)

//     xhr.onreadystatechange = function () {
//         if (this.readyState === 4 & this.status === 200) {
//             console.log(JSON.parse(this.responseText))
//         }
//     }

//     setTimeout(() => {
//         xhr.send()
//     }, Math.floor(Math.random() * 3000) + 1000)
// }

// getData('./todos/a.json')
// getData('./todos/m.json')
// getData('./todos/q.json')

//* As we expected, order of apperince is wracked! Use call beck to organize it
// function getData(endpoint, callback) {
//     const xhr = new XMLHttpRequest()

//     xhr.open('GET', endpoint)

//     xhr.onreadystatechange = function () {
//         if (this.readyState === 4 & this.status === 200) {
//             callback(JSON.parse(this.responseText))
//         }
//     }

//     setTimeout(() => {
//         xhr.send()
//     }, Math.floor(Math.random() * 3000) + 1000)
// }

// getData('./todos/a.json', (data) => {
//     console.log(data)
//     getData('./todos/m.json', (data) => {
//         console.log(data)
//         getData('./todos/q.json', (data) => {
//             console.log(data)
//         })
//     })
// })

//* Now insted of callbacks use promise chaining to get the same result
// function getData(endpoint) {
//     return new Promise((resolve, reject) => {
//         const xhr = new XMLHttpRequest()

//         xhr.open('GET', endpoint)

//         xhr.onreadystatechange = function () {
//             if (this.readyState === 4) {
//                 if (this.status === 200) {
//                     resolve(JSON.parse(this.responseText))
//                 } else {
//                     reject()
//                 }
//             }
//         }

//         setTimeout(() => {
//             xhr.send()
//         }, Math.floor(Math.random() * 3000) + 1000)
//     })
// }

// getData('./todos/a.json')
//     .then((item) => {console.log(item); return getData('./todos/m.json')})
//     .then((item) => {console.log(item); return getData('./todos/q.json')})
//     .then((item) => console.log(item))

//* Now insted of promise chaining use put the promise function call into a variable. Use callback with the variable
// function getData(endpoint) {
//     return new Promise((resolve, reject) => {
//         const xhr = new XMLHttpRequest()

//         xhr.open('GET', endpoint)

//         xhr.onreadystatechange = function () {
//             if (this.readyState === 4) {
//                 if (this.status === 200) {
//                     resolve(JSON.parse(this.responseText))
//                 } else {
//                     reject()
//                 }
//             }
//         }

//         setTimeout(() => {
//             xhr.send()
//         }, Math.floor(Math.random() * 3000) + 1000)
//     })
// }

// const moviePromise = getData('./todos/a.json')
// const moviePromiseA = getData('./todos/m.json')
// const moviePromiseB = getData('./todos/q.json')

// moviePromise.then(item => console.log(item))
// moviePromiseA.then(item => console.log(item))
// moviePromiseB.then(item => console.log(item))

//* Now insted of promise chaining use put the promise function call into a variables. use Promise.All to get the same result
// function getData(endpoint) {
//     return new Promise((resolve, reject) => {
//         const xhr = new XMLHttpRequest()

//         xhr.open('GET', endpoint)

//         xhr.onreadystatechange = function () {
//             if (this.readyState === 4) {
//                 if (this.status === 200) {
//                     resolve(JSON.parse(this.responseText))
//                 } else {
//                     reject()
//                 }
//             }
//         }

//         setTimeout(() => {
//             xhr.send()
//         }, Math.floor(Math.random() * 3000) + 1000)
//     })
// }

// const moviePromise = getData('./todos/a.json')
// const moviePromiseA = getData('./todos/m.json')
// const moviePromiseB = getData('./todos/q.json')

// Promise.all([moviePromise, moviePromiseA, moviePromiseB])
//     .then((data) => {
//         console.log(data)
//     })

//* Cause an error Than catch it
// function getData(endpoint) {
//     return new Promise((resolve, reject) => {
//         const xhr = new XMLHttpRequest()

//         xhr.open('GET', endpoint)

//         xhr.onreadystatechange = function () {
//             if (this.readyState === 4) {
//                 if (this.status === 200) {
//                     resolve(JSON.parse(this.responseText))
//                 } else {
//                     reject('Something went wrong!')
//                 }
//             }
//         }

//         setTimeout(() => {
//             xhr.send()
//         }, Math.floor(Math.random() * 3000) + 1000)
//     })
// }

// const moviePromise = getData('./todos/aX.json')
// const moviePromiseA = getData('./todos/m.json')
// const moviePromiseB = getData('./todos/q.json')

// Promise.all([moviePromise, moviePromiseA, moviePromiseB])
//     .then((data) => console.log(data))
//     .catch((error) => console.log(error))

//* Declare a variable with promise, add the variable to the Promise.all
// function getData(endpoint) {
//     return new Promise((resolve, reject) => {
//         const xhr = new XMLHttpRequest()

//         xhr.open('GET', endpoint)

//         xhr.onreadystatechange = function () {
//             if (this.readyState === 4) {
//                 if (this.status === 200) {
//                     resolve(JSON.parse(this.responseText))
//                 } else {
//                     reject('Something went wrong!')
//                 }
//             }
//         }

//         setTimeout(() => {
//             xhr.send()
//         }, Math.floor(Math.random() * 3000) + 1000)
//     })
// }

// const moviePromise = getData('./todos/a.json')
// const moviePromiseA = getData('./todos/m.json')
// const moviePromiseB = getData('./todos/q.json')

// const dummyPromise = new Promise((resolve, reject) => {
//     resolve('Hello World!')
// })

// Promise.all([moviePromise, moviePromiseA, moviePromiseB, dummyPromise])
//     .then((data) => console.log(data))
//     .catch((error) => console.log(error))

//* Insted of Promise.all use async await
// function getData(endpoint) {
//     return new Promise((resolve, reject) => {
//         const xhr = new XMLHttpRequest()

//         xhr.open('GET', endpoint)

//         xhr.onreadystatechange = function () {
//             if (this.readyState === 4) {
//                 if (this.status === 200) {
//                     resolve(JSON.parse(this.responseText))
//                 } else {
//                     reject('Something went wrong!')
//                 }
//             }
//         }

//         setTimeout(() => {
//             xhr.send()
//         }, Math.floor(Math.random() * 3000) + 1000)
//     })
// }

// const moviePromise = getData('./todos/a.json')
// const moviePromiseA = getData('./todos/m.json')
// const moviePromiseB = getData('./todos/q.json')

// const dummyPromise = new Promise((resolve, reject) => {
//     resolve('Hello World!')
// })

// async function getAllData() {
//     const A = await getData('./todos/a.json')
//     console.log(A)
//     const M = await getData('./todos/m.json')
//     console.log(M)
//     const Q = await getData('./todos/q.json')
//     console.log(Q)
// }

// getAllData()

//* Inside async await function, add a non async await console log to see how it works
// function getData(endpoint) {
//     return new Promise((resolve, reject) => {
//         const xhr = new XMLHttpRequest()

//         xhr.open('GET', endpoint)

//         xhr.onreadystatechange = function () {
//             if (this.readyState === 4) {
//                 if (this.status === 200) {
//                     resolve(JSON.parse(this.responseText))
//                 } else {
//                     reject('Something went wrong!')
//                 }
//             }
//         }

//         setTimeout(() => {
//             xhr.send()
//         }, Math.floor(Math.random() * 3000) + 1000)
//     })
// }

// const moviePromise = getData('./todos/a.json')
// const moviePromiseA = getData('./todos/m.json')
// const moviePromiseB = getData('./todos/q.json')

// const dummyPromise = new Promise((resolve, reject) => {
//     resolve('Hello World!')
// })

// async function getAllData() {
//     const A = await getData('./todos/a.json')
//     console.log(A)
//     const M = await getData('./todos/m.json')
//     console.log(M)
//     const Q = await getData('./todos/q.json')
//     console.log(Q)

//     console.log(123)
// }

// getAllData()

//* Log all the JSON files using fetch
// async function getAllDataWithFetch() {
//     const dataRes = await fetch('./todos/a.json')
//     const data = await dataRes.json()

//     const dataResA = await fetch('./todos/m.json')
//     const dataA = await dataResA.json()

//     const dataResB = await fetch('./todos/q.json')
//     const dataB = await dataResB.json()

//     console.log(data, dataA, dataB)
// }

// getAllDataWithFetch()

//* Log all the JSON files using Promise.All
// async function getAllDataWithPromiseAll() {
//     const [dataRes, dataResA, dataResB] = await Promise.all([
//         fetch('./todos/a.json'),
//         fetch('./todos/m.json'),
//         fetch('./todos/q.json'),
//     ])
//     const data = await dataRes.json()
//     const dataA = await dataResA.json()
//     const dataB = await dataResB.json()

//     console.log(data, dataA, dataB)
// }

// getAllDataWithPromiseAll()

//* Insted of creating variable to convert the response to json, put it inside the fetch using then
// async function getAllDataWithPromiseAll() {
//     const [dataRes, dataResA, dataResB] = await Promise.all([
//         fetch('./todos/a.json').then(res => res.json()),
//         fetch('./todos/m.json').then(res => res.json()),
//         fetch('./todos/q.json').then(res => res.json()),
//     ])
//     console.log(dataRes, dataResA, dataResB)
// }

// getAllDataWithPromiseAll()

//* Create a promise that log `T_T` than while resolve log `O_o`
// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('T_T')
//         resolve()
//     }, 1000)
// })

// promise.then(() => {
//     console.log('O_o')
// })

//* Log all 200 JSON object from `https://jsonplaceholder.typicode.com/todos` using fetch
// fetch('https://jsonplaceholder.typicode.com/todos')
//     .then(response => response.json())
//     .then(json => console.log(json))

// console.log('Test')

//* Now, Log all 200 JSON object from `https://jsonplaceholder.typicode.com/todos` but using async await
// async function getTodos() {
//     const res = await fetch('https://jsonplaceholder.typicode.com/todos')
//     const data = await(res.json())
//     console.log(data)
// }

// getTodos()

// console.log('Test')

//* Inside the async function, insted of logging the data, return it. Declare a variable outside the function that stores that data. Log the variable & see the result
// async function getTodos() {
//     const res = await fetch('https://jsonplaceholder.typicode.com/todos')
//     const data = await(res.json())

//     return data;
// }

// const todos = getTodos()
// console.log(todos)

// getTodos()

//* Log something in the global scope the see that promise is non blocking function
// console.log('Global Scope')

//* Rather than puting the promise into a variable, than call .than on the variable, put .then on the promise itself
// new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('T_T_T')
//         resolve()
//     }, 1000)
// }).then(() =>console.log('O_o_O'))

//* Return some data on the promise (ex: name: 'Sakib', age: 30 ) then log it
// new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve({ name: 'Sakib', age: 30 })
//     }, 1000)
// }).then((user) => console.log(user))

//* Throw an error inside the promise. Than catch it
// const getUser = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let error = true

//         if (!error) {
//             resolve({ name: 'Sakib', age: 30 })
//         } else {
//             reject('Error: Something went wrong')
//         }
//     }, 1000)
// })
    
// getUser
//     .then((user) => console.log(user))
//     .catch((error) => console.log(error))

//* Run some code no matter what
// const getUser = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let error = true

//         if (!error) {
//             resolve({ name: 'Sakib', age: 30 })
//         } else {
//             reject('Error: Something went wrong')
//         }
//     }, 1000)
// })
    
// getUser
//     .then((user) => console.log(user))
//     .catch((error) => console.log(error))
//     .finally(() => console.log('The promise resolved or Rejected!'))


//* Previously we have created a function that get posts. Refactor just the createPost using promise
// const posts = [
//     { title: "Post One", body: "This is post one"},
//     { title: "Post Two", body: "This is post Two"},
// ]

// function getPosts() {
//     setTimeout(() => {
//         posts.forEach(function (post) {
//             const div = document.createElement('div')
//             div.innerHTML = `<h1><strong>${post.title}</strong></h1>`
//             setTimeout(() => {
//                 div.innerHTML += `<p>${post.body}</p>`
//             }, 1000)
//             document.querySelector('body').appendChild(div)
//         })
//     }, 1000)
// }

// function createPost(post) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             posts.push(post)
//             resolve()
//         }, 2000)
//     })
    
// }

// createPost({ title: "Post Three", body: "This is post Three"}).then(getPosts)

//* Inside `createPost` create a dummy error. Catch it at callback with an error handler function
// const posts = [
//     { title: "Post One", body: "This is post one"},
//     { title: "Post Two", body: "This is post Two"},
// ]

// function getPosts() {
//     setTimeout(() => {
//         posts.forEach(function (post) {
//             const div = document.createElement('div')
//             div.innerHTML = `<h1><strong>${post.title}</strong></h1>`
//             setTimeout(() => {
//                 div.innerHTML += `<p>${post.body}</p>`
//             }, 1000)
//             document.querySelector('body').appendChild(div)
//         })
//     }, 1000)
// }

// function createPost(post) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let error = true

//             if (!error) {
//                 posts.push(post)
//                 resolve()
//             } else {
//                 reject('Error!')
//             }
//         }, 2000)
//     })
// }

// function showError(error) {
//     const h3 = document.createElement('h3')
//     h3.innerHTML = `<strong>${error}</strong>`
//     document.querySelector('body').appendChild(h3)
// }

// createPost({ title: "Post Three", body: "This is post Three" })
//     .then(getPosts)
//     .catch(showError)

//* Create a promise that log an object after 1sec using then
// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve({name: 'John', age: '30' })
//     }, 1000)
// })

// promise.then(data => console.log(data))

//* Insted of .then, use async await to log the object
// async function getPromise() {
//     const response = await promise;
//     console.log(response)
// }

// getPromise()

//* Using async await, log all the users from `https://jsonplaceholder.typicode.com/users` as object
// async function getUser() {
//     const res = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await res.json()

//     console.log(data)
// }

// getUser()

//* Now insted of using async await, use .then to log all the users from `https://jsonplaceholder.typicode.com/users` as object
// function getUsers() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//         .then(res => res.json())
//         .then(data => console.log(data))
// }

// getUsers()

//* Using async await but with arrow functions, log all the users from `https://jsonplaceholder.typicode.com/users` as object
// const getUser = async() => {
//     const res = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await res.json()

//     console.log(data)
// }

// getUser()

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

//* Previously we have declared a variable that stores a promise. At resolved it return an object, on reject it logged a text. In the promise callback reurn user name on 1st chain, use it in 2nd chain
// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let error = false

//         if (!error) {
//             resolve({ name: 'Sakib', age: 30 })
//         } else {
//             reject('Error: Something went wrong')
//         }
//     }, 1000)
// })

// promise
//     .then((user) => {
//         console.log(user)
//         return user.name
//     })
//     .then((name) => {
//         console.log(name)
//     })
//     .catch(error => console.log(error))

//* In the promise callback add another chain that logs the length of the text
// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let error = false

//         if (!error) {
//             resolve({ name: 'Sakib', age: 30 })
//         } else {
//             reject('Error: Something went wrong')
//         }
//     }, 1000)
// })

// promise
//     .then((user) => {
//         console.log(user)
//         return user.name
//     })
//     .then((name) => {
//         console.log(name)
//         return name.length
//     })
//     .then(length => console.log(length))
//     .catch(error => console.log(error))

//* Now throw an error inside the promise. After cathing the error, add another callback
// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let error = true

//         if (!error) {
//             resolve({ name: 'Sakib', age: 30 })
//         } else {
//             reject('Error: Something went wrong')
//         }
//     }, 1000)
// })

// promise
//     .then((user) => {
//         console.log(user)
//         return user.name
//     })
//     .then((name) => {
//         console.log(name)
//         return name.length
//     })
//     .then(length => console.log(length))
//     .catch(error => console.log(error))
//     .then(x => console.log('This will run no matter what!'))

//* Pass a data at error catch. Log the data at final callback
// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let error = true

//         if (!error) {
//             resolve({ name: 'Sakib', age: 30 })
//         } else {
//             reject('Error: Something went wrong')
//         }
//     }, 1000)
// })

// promise
//     .then((user) => {
//         console.log(user)
//         return user.name
//     })
//     .then((name) => {
//         console.log(name)
//         return name.length
//     })
//     .then(length => console.log(length))
//     .catch(error => {
//         console.log(error)
//         return 69
//     })
//     .then(x => console.log('This will run no matter what!', x))

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
// fetch('./todos/a.json').then((response) => {
//     return response.json()
// }).then(data => {
//     console.log(data)
// }).catch((error) => {
//     console.log('rejected', error)
// })

//! Async & Await
//* Create a async function & log it. It should log a promise
// const getTodos = async () => {

// }

// const test = getTodos()
// console.log(test)

//* Get a response from the 1st JSON file using async & await
// const getTodos = async () => {
//     const response = await fetch('./todos/a.json')
//     console.log(response)
// }

// getTodos()

//* Now log the data as object from the 1st JSON file
// const getTodos = async () => {
//     const response = await fetch('./todos/a.json')
//     const data = await response.json()
//     console.log(data)
// }

// getTodos()

//* How can you use the getTodos function with .then() to handle and log resolved JSON data in JavaScript
// const getTodos = async () => {
//     const response = await fetch('./todos/a.json')
//     const data = await response.json()
//     return data
// }

// getTodos()
//     .then(data => console.log('Resolved: ', data))

//TODO [WESBOS]
//* Create a function that returns a promise. The promise retuns `🍕` as resolve
// function makePizza() {
//     const pizzaPromise = new Promise((resolve, reject) => {
//         resolve('🍕')
//     })
//     return pizzaPromise
// }

// const pizza = makePizza()
// console.log(pizza)

//* What is a Pizza without any toppings? Create 2 variables that will pass the data to the promise. Log those
// function makePizza(toppings) {
//     const pizzaPromise = new Promise((resolve, reject) => {
//         resolve(`Here is your pizza🍕 with toppings ${toppings}`)
//     })
//     return pizzaPromise
// }

// const pepperoniPromise = makePizza(['Pepperoni'])
// const canadaPromise = makePizza(['Pepperoni', 'mushrooms', 'onion'])

// console.log(pepperoniPromise, canadaPromise)

//* Use callback to log the 1st variable
// function makePizza(toppings) {
//     const pizzaPromise = new Promise((resolve, reject) => {
//         resolve(`Here is your pizza🍕 with toppings ${toppings}`)
//     })
//     return pizzaPromise
// }

// const pepperoniPromise = makePizza(['Pepperoni'])
// const canadaPromise = makePizza(['Pepperoni', 'mushrooms', 'onion'])

// pepperoniPromise.then((pizza) => {
//     console.log('Ahh got it!')
//     console.log(pizza)
// })

//* Add 1 sec delay to the promise function
// function makePizza(toppings) {
//     const pizzaPromise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve(`Here is your pizza🍕 with toppings ${toppings}`), 1000)
//     })
//     return pizzaPromise
// }

// const pepperoniPromise = makePizza(['Pepperoni'])
// const canadaPromise = makePizza(['Pepperoni', 'mushrooms', 'onion'])

// pepperoniPromise.then((pizza) => {
//     console.log('Ahh got it!')
//     console.log(pizza)
// })

//* Chaining callbacks, log for 'Pepperoni' pizza
// function makePizza(toppings) {
//     const pizzaPromise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve(`Here is your pizza🍕 with toppings ${toppings}`), 1000)
//     })
//     return pizzaPromise
// }

// makePizza(['Pepperoni']).then((pizza) => {
//     console.log(pizza)
// })

//* Add anoother chain to the callbacks, for 'ham', 'cheese'
// function makePizza(toppings) {
//     const pizzaPromise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve(`Here is your pizza🍕 with toppings ${toppings}`), 1000)
//     })
//     return pizzaPromise
// }

// makePizza(['Pepperoni']).then((pizza) => {
//     console.log(pizza)
//     return makePizza(['ham', 'cheese'])
// }).then((pizza) => {
//     console.log(pizza)
// })

//* Add anoother chain to the callbacks, for 'hot peppers', 'onion', 'feta'
// function makePizza(toppings) {
//     const pizzaPromise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve(`Here is your pizza🍕 with toppings ${toppings}`), 1000)
//     })
//     return pizzaPromise
// }

// makePizza(['Pepperoni']).then((pizza) => {
//     console.log(pizza)
//     return makePizza(['ham', 'cheese'])
// }).then((pizza) => {
//     console.log(pizza)
//     return makePizza(['hot peppers', 'onion', 'feta'])
// }).then((pizza) => {
//     console.log(pizza)
// })

//* Lets reduce the code a bit. remove the variable that the promise was in. Than return the promise
// function makePizza(toppings) {
//     return new Promise((resolve, reject) => {
    
//     setTimeout(() => resolve(`Here is your pizza🍕 with toppings ${toppings}`), 1000)
//     })
// }

// makePizza(['Pepperoni']).then((pizza) => {
//     console.log(pizza)
//     return makePizza(['ham', 'cheese'])
// }).then((pizza) => {
//     console.log(pizza)
//     return makePizza(['hot peppers', 'onion', 'feta'])
// }).then((pizza) => {
//     console.log(pizza)
// })

//* Pizza toppings are separeted by comma's till now. Replace it with space
// function makePizza(toppings) {
//     return new Promise((resolve, reject) => {
    
//     setTimeout(() => resolve(`Here is your pizza🍕 with toppings ${toppings.join(' ')}`), 1000)
//     })
// }

// makePizza(['Pepperoni']).then((pizza) => {
//     console.log(pizza)
//     return makePizza(['ham', 'cheese'])
// }).then((pizza) => {
//     console.log(pizza)
//     return makePizza(['hot peppers', 'onion', 'feta'])
// }).then((pizza) => {
//     console.log(pizza)
// })

//* What if someone wants a Pizza with no toppings? Add aditional .5sec of delay for each toppings
// function makePizza(toppings = []) {
//     return new Promise((resolve, reject) => {
    
//     const amountOfTimeToBake = 500 + (toppings.length * 500)
        
//     setTimeout(() => resolve(`Here is your pizza🍕 with toppings ${toppings.join(' ')}`), amountOfTimeToBake)
//     })
// }

// makePizza(['Pepperoni']).then((pizza) => {
//     console.log(pizza)
//     return makePizza(['ham', 'cheese'])
// }).then((pizza) => {
//     console.log(pizza)
//     return makePizza(['hot peppers', 'onion', 'feta'])
// }).then((pizza) => {
//     console.log(pizza)
//     return makePizza()
// }).then(pizza => {
//     console.log(pizza)
//     return makePizza(['🍍','🍍','🍍','🍍','🍍','🍍','🍍','🍍','🍍','🍍','🍍','🍍','🍍'])
// }).then(pizza => {
//     console.log(pizza)
// }).then(pizza => console.log(`All done! Here is your last pizza!`))

//* We have been running using single callback till now. How can we run it concurently
// function makePizza(toppings = []) {
//     return new Promise((resolve, reject) => {
    
//     const amountOfTimeToBake = 500 + (toppings.length * 500)
        
//     setTimeout(() => resolve(`Here is your pizza🍕 with toppings ${toppings.join(' ')}`), amountOfTimeToBake)
//     })
// }

// const pizzaPromise1 = makePizza(['Pepperoni'])
// const pizzaPromise2 = makePizza(['ham', 'cheese'])
// const pizzaPromise3 = makePizza(['hot peppers', 'onion', 'feta'])
// const pizzaPromise5 = makePizza()
// const pizzaPromise4 = makePizza(['🍍','🍍','🍍','🍍','🍍','🍍','🍍','🍍','🍍','🍍'])

// pizzaPromise1.then(pizza => console.log(pizza))
// pizzaPromise2.then(pizza => console.log(pizza))
// pizzaPromise3.then(pizza => console.log(pizza))
// pizzaPromise4.then(pizza => console.log(pizza))
// pizzaPromise5.then(pizza => console.log(pizza))

//* Log all the promises at once
// function makePizza(toppings = []) {
//     return new Promise((resolve, reject) => {
    
//     const amountOfTimeToBake = 500 + (toppings.length * 500)
        
//     setTimeout(() => resolve(`Here is your pizza🍕 with toppings ${toppings.join(' ')}`), amountOfTimeToBake)
//     })
// }

// const pizzaPromise1 = makePizza(['Pepperoni'])
// const pizzaPromise2 = makePizza(['ham', 'cheese'])
// const pizzaPromise3 = makePizza(['hot peppers', 'onion', 'feta'])
// const pizzaPromise5 = makePizza()
// const pizzaPromise4 = makePizza(['🍍','🍍','🍍','🍍','🍍','🍍','🍍','🍍','🍍','🍍'])

// const dinner = Promise.all([pizzaPromise1, pizzaPromise2, pizzaPromise3, pizzaPromise4])

// dinner.then(pizza => console.log(pizza))

//* Rather than logging an array log all of them as a string
// function makePizza(toppings = []) {
//     return new Promise((resolve, reject) => {
    
//     const amountOfTimeToBake = 500 + (toppings.length * 500)
        
//     setTimeout(() => resolve(`Here is your pizza🍕 with toppings ${toppings.join(' ')}`), amountOfTimeToBake)
//     })
// }

// const pizzaPromise1 = makePizza(['Pepperoni'])
// const pizzaPromise2 = makePizza(['ham', 'cheese'])
// const pizzaPromise3 = makePizza(['hot peppers', 'onion', 'feta'])
// const pizzaPromise5 = makePizza()
// const pizzaPromise4 = makePizza(['🍍','🍍','🍍','🍍','🍍','🍍','🍍','🍍','🍍','🍍'])

// const dinner = Promise.all([pizzaPromise1, pizzaPromise2, pizzaPromise3, pizzaPromise4])

// dinner.then(function(pizzas) {
//     const [hottie, garbagePali, hamAndCheese] = pizzas

//     console.log(hottie, garbagePali, hamAndCheese)
// })

//* Pass the array via function parameter
// function makePizza(toppings = []) {
//     return new Promise((resolve, reject) => {
    
//     const amountOfTimeToBake = 500 + (toppings.length * 500)
        
//     setTimeout(() => resolve(`Here is your pizza🍕 with toppings ${toppings.join(' ')}`), amountOfTimeToBake)
//     })
// }

// const pizzaPromise1 = makePizza(['Pepperoni'])
// const pizzaPromise2 = makePizza(['ham', 'cheese'])
// const pizzaPromise3 = makePizza(['hot peppers', 'onion', 'feta'])
// const pizzaPromise5 = makePizza()
// const pizzaPromise4 = makePizza(['🍍','🍍','🍍','🍍','🍍','🍍','🍍','🍍','🍍','🍍'])

// const dinner = Promise.all([pizzaPromise1, pizzaPromise2, pizzaPromise3, pizzaPromise4])

// dinner.then(function([hottie, garbagePali, hamAndCheese]) {
//     console.log(hottie, garbagePali, hamAndCheese)
// })

//* We used Promise.all() that wait till every promise if filled than log the data, now let's say someone is in hurry. Log a promise ASAP
// function makePizza(toppings = []) {
//     return new Promise((resolve, reject) => {
    
//     const amountOfTimeToBake = 500 + (toppings.length * 500)
        
//     setTimeout(() => resolve(`Here is your pizza🍕 with toppings ${toppings.join(' ')}`), amountOfTimeToBake)
//     })
// }

// const pizzaPromise1 = makePizza(['Pepperoni'])
// const pizzaPromise2 = makePizza(['ham', 'cheese'])
// const pizzaPromise3 = makePizza(['hot peppers', 'onion', 'feta'])
// const pizzaPromise5 = makePizza()
// const pizzaPromise4 = makePizza(['🍍','🍍','🍍','🍍','🍍','🍍','🍍','🍍','🍍','🍍'])
 
// const dinner = Promise.all([pizzaPromise1, pizzaPromise2, pizzaPromise3, pizzaPromise4])

// dinner.then(function([hottie, garbagePali, hamAndCheese]) {
//     console.log(hottie, garbagePali, hamAndCheese)
// })

// const firstPizza = Promise.race([pizzaPromise1, pizzaPromise2, pizzaPromise3])
// firstPizza.then(pizza => console.log('You must be hungery, here is the first one ready!'))

//! Throwing & Catching Errors
//* How can you handle errors when using the getTodos function with promises in JavaScript?
// const getTodos = async () => {
//     const response = await fetch('./todos/a.json')
//     const data = await response.json()
//     return data
// }

// getTodos()
//     .then(data => console.log('Resolved: ', data))
//     .catch(error => console.log('Rejected: ', error))

//* How can you log only the error message when handling a rejected promise in JavaScript? (For an error in the JSON file)
// const getTodos = async () => {
//     const response = await fetch('./todos/a.json')
//     const data = await response.json()


//     return data
// }

// getTodos()
//     .then(data => console.log('Resolved: ', data))
//     .catch(error => console.log('Rejected: ', error.message))

//* Try to fetch a non exixtent JSON file. How can you log only the error message when handling a rejected promise in JavaScript?
// const getTodos = async () => {
//     const response = await fetch('./todos/aX.json')
//     const data = await response.json()


//     return data
// }

// getTodos()
//     .then(data => console.log('Resolved: ', data))
//     .catch(error => console.log('Rejected: ', error.message))

//* As you can see, it says there is a problem with the JSON. But that is not the case.  Prevent it by checking the status.
// const getTodos = async () => {
//     const response = await fetch('./todos/aX.json')

//     if (response.status !== 200) {
//         throw new Error('Cannot fetch the data')
//     }
//     const data = await response.json()

//     return data
// }

// getTodos()
//     .then(data => console.log('Resolved: ', data))
//     .catch(error => console.log('Rejected: ', error.message))

//* Imagine someone wants to put melon🍈 on a pizza. Reject it
// function makePizza(toppings = []) {
//     return new Promise((resolve, reject) => {
//         if (toppings.includes('melon')) {
//             reject('Brav? What is wrong with you?')
//     }
//     const amountOfTimeToBake = 500 + (toppings.length * 500)
        
//     setTimeout(() => resolve(`Here is your pizza🍕 with toppings ${toppings.join(' ')}`), amountOfTimeToBake)
//     })
// }

// makePizza(['cheese', 'melon']).then(pizza => {
//     console.log(pizza)
// })

//* Now handle the error
// function makePizza(toppings = []) {
//     return new Promise((resolve, reject) => {
//         if (toppings.includes('melon')) {
//             reject('Brav? What is wrong with you?')
//     }
//     const amountOfTimeToBake = 500 + (toppings.length * 500)
        
//     setTimeout(() => resolve(`Here is your pizza🍕 with toppings ${toppings.join(' ')}`), amountOfTimeToBake)
//     })
// }

// makePizza(['cheese', 'melon']).then(pizza => {
//     console.log(pizza)
// }).catch(error => {
//     console.log('WTF!!')
//     console.log(error)
// })

//* Create a function that handles the function
// function makePizza(toppings = []) {
//     return new Promise((resolve, reject) => {
//         if (toppings.includes('melon')) {
//             reject('Brav? What is wrong with you?')
//     }
//     const amountOfTimeToBake = 500 + (toppings.length * 500)
        
//     setTimeout(() => resolve(`Here is your pizza🍕 with toppings ${toppings.join(' ')}`), amountOfTimeToBake)
//     })
// }

// function handleError(error) {
//     console.log('WTF!!')
//     console.log(error)
// }

// makePizza(['cheese', 'melon']).then(pizza => {
//     console.log(pizza)
// }).catch(handleError)

//* Bring back the code with callbackchain. Add error handling function to it
// function makePizza(toppings = []) {
//     return new Promise((resolve, reject) => {
//         if (toppings.includes('melon')) {
//             reject('Brav? What is wrong with you?')
//     }
//     const amountOfTimeToBake = 500 + (toppings.length * 500)
        
//     setTimeout(() => resolve(`Here is your pizza🍕 with toppings ${toppings.join(' ')}`), amountOfTimeToBake)
//     })
// }

// function handleError(error) {
//     console.log('WTF!!')
//     console.log(error)
// }

// makePizza(['cheese', 'melon']).then(pizza => {
//     console.log(pizza)
// }).catch(handleError)



// makePizza(['Pepperoni']).then((pizza) => {
//     console.log(pizza)
//     return makePizza(['ham', 'cheese'])
// }).then((pizza) => {
//     console.log(pizza)
//     return makePizza(['hot peppers', 'onion', 'feta'])
// }).then((pizza) => {
//     console.log(pizza)
//     return makePizza()
// }).then(pizza => {
//     console.log(pizza)
//     return makePizza(['🍍','🍍','🍍','🍍','🍍','🍍','🍍','melon','🍍','🍍','🍍','🍍','🍍'])
// }).then(pizza => {
//     console.log(pizza)
// }).then(pizza => console.log(`All done! Here is your last pizza!`)).catch(handleError)

//* Problem with error handeling is in a callback chain of 7, if the 1st one has an error JS won't run the next ones. To fix it we will use Promise.allSettled. Create 2 Pizzas, one with 'melon' so it would be rejected. See the result
// function makePizza(toppings = []) {
//     return new Promise((resolve, reject) => {
//         if (toppings.includes('melon')) {
//             reject('Brav? What is wrong with you?')
//     }
//     const amountOfTimeToBake = 500 + (toppings.length * 500)
        
//     setTimeout(() => resolve(`Here is your pizza🍕 with toppings ${toppings.join(' ')}`), amountOfTimeToBake)
//     })
// }

// function handleError(error) {
//     console.log('WTF!!')
//     console.log(error)
// }

// const pizzaA = makePizza(['pep'])
// const pizzaB = makePizza(['melon'])

// const dinner = Promise.allSettled([pizzaA, pizzaB])

// dinner.then(results => {
//     console.log(results)
// })

//* Previously we used Promise.all. What would happen if we use it insted of `Promise.allSettled`
// function makePizza(toppings = []) {
//     return new Promise((resolve, reject) => {
//         if (toppings.includes('melon')) {
//             reject('Brav? What is wrong with you?')
//     }
//     const amountOfTimeToBake = 500 + (toppings.length * 500)
        
//     setTimeout(() => resolve(`Here is your pizza🍕 with toppings ${toppings.join(' ')}`), amountOfTimeToBake)
//     })
// }

// function handleError(error) {
//     console.log('WTF!!')
//     console.log(error)
// }

// const pizzaA = makePizza(['pep'])
// const pizzaB = makePizza(['melon'])

// const dinner = Promise.all([pizzaA, pizzaB])

// dinner.then(results => {
//     console.log(results)
// })

//* It kind of worked. But the error needs to be handled.
// function makePizza(toppings = []) {
//     return new Promise((resolve, reject) => {
//         if (toppings.includes('melon')) {
//             reject('Brav? What is wrong with you?')
//     }
//     const amountOfTimeToBake = 500 + (toppings.length * 500)
        
//     setTimeout(() => resolve(`Here is your pizza🍕 with toppings ${toppings.join(' ')}`), amountOfTimeToBake)
//     })
// }

// function handleError(error) {
//     console.log('WTF!!')
//     console.log(error)
// }

// const pizzaA = makePizza(['pep'])
// const pizzaB = makePizza(['melon'])

// const dinner = Promise.all([pizzaA, pizzaB]).catch(handleError)

// dinner.then(results => {
//     console.log(results)
// })

//* Previously we animated a box using setTimeout. Create the animation using promise chain
// const go = document.querySelector('.go')
// const wait = (ms = 0) => new Promise(resolve => setTimeout(resolve, ms))

// const animate = (e) => {
//     const el = e.currentTarget
//     el.textContent = 'GO'

//     wait(2000)
//         .then(() => {
//             el.classList.add('circle')
//             return wait(500)
//         })
//         .then(() => {
//             el.classList.add('danger');
//             return wait(250)
//         }).then(() => {
//             el.classList.remove('circle')
//             return wait(300)
//         }).then(() => {
//             el.classList.add('purple')
//             return wait(500)
//         }).then(() => {
//             el.classList.add('fadeOut')
//         })
// }
// go.addEventListener('click', animate)

//*

// const go = document.querySelector('.go')


//* Create a async function with 2 logs. 2nd one logs after 2 sec. Use async await with previously created wait function
// const wait = (ms = 0) => new Promise(resolve => setTimeout(resolve, ms))

// async function go() {
//     console.log('start')
//     await wait(2000)
//     console.log('end')
//     await wait(200)
//     console.log('ended')
// }

// go()

//  Create an async function
// async function fd() {
//     await wait(5000)
//     console.log('It"s been a while')
// }

// fd()

//*Create an async arrow function
// const arrow = async () => {
//     await wait(10000)
//     console.log('🏹 🎯')
// }

// arrow()

//* Add an async function to event listener
// window.addEventListener('click', async function () {
//     await wait(5000)
//     console.log('Window Event Logged 5 seconds ago !')
// })

//* Create an object. Inside a Method, Method Shorthand, Function Property. Each of them a async
// const person = {
//     // Method
//     sayHi: async function () {
//         await wait(5000)
//         console.log('This is a method!')
//     },
//     // Method Shorthand
//     async sayHello() {
//         await wait(10000)
//         console.log('This is a Shorthand Method!')

//     },
//     // Function Property
//     sayHey: async () => {
//         await wait(15000)
//         console.log('THis is a Function Property!')
//     }
// }

// person.sayHi()
// person.sayHello()
// person.sayHey()

//* Create a async callback to makePizza
// const wait = (ms = 0) => new Promise(resolve => setTimeout(resolve, ms))

// function makePizza(toppings = []) {
//     return new Promise((resolve, reject) => {
//         if (toppings.includes('melon')) {
//             reject('Brav? What is wrong with you?')
//     }
//     const amountOfTimeToBake = 500 + (toppings.length * 500)
        
//     setTimeout(() => resolve(`Here is your pizza🍕 with toppings ${toppings.join(' ')}`), amountOfTimeToBake)
//     })
// }

// async function makeDinner() {
//     const pizza = await makePizza(['pepperoni', 'love'])
//     console.log(pizza)
//     const pizzaA = await makePizza(['mushrooms', 'hate'])
//     console.log(pizzaA)
// }

// makeDinner()

//* Use Promise.all to log all the data
// const wait = (ms = 0) => new Promise(resolve => setTimeout(resolve, ms))

// function makePizza(toppings = []) {
//     return new Promise((resolve, reject) => {
//         if (toppings.includes('melon')) {
//             reject('Brav? What is wrong with you?')
//     }
//     const amountOfTimeToBake = 500 + (toppings.length * 500)
        
//     setTimeout(() => resolve(`Here is your pizza🍕 with toppings ${toppings.join(' ')}`), amountOfTimeToBake)
//     })
// }

// async function makeDinner() {
//     const pizzaPromise = await makePizza(['pepperoni', 'love'])
//     const pizzaPromiseA = await makePizza(['mushrooms', 'hate'])

//     const pizzas = await Promise.all([pizzaPromise, pizzaPromiseA])

//     console.log(pizzas)
// }

// makeDinner()

//* Destructure the large pizza to individual, than log it
// const wait = (ms = 0) => new Promise(resolve => setTimeout(resolve, ms))

// function makePizza(toppings = []) {
//     return new Promise((resolve, reject) => {
//         if (toppings.includes('melon')) {
//             reject('Brav? What is wrong with you?')
//     }
//     const amountOfTimeToBake = 500 + (toppings.length * 500)
        
//     setTimeout(() => resolve(`Here is your pizza🍕 with toppings ${toppings.join(' ')}`), amountOfTimeToBake)
//     })
// }

// async function makeDinner() {
//     const pizzaPromise = await makePizza(['pepperoni', 'love'])
//     const pizzaPromiseA = await makePizza(['mushrooms', 'hate'])

//     const [pep, mush] = await Promise.all([pizzaPromise, pizzaPromiseA])

//     console.log(pep, mush)
// }

// makeDinner()

//* Reanimate the box animation using async await
// const go = document.querySelector('.go')
// const wait = (ms = 0) => new Promise(resolve => setTimeout(resolve, ms))

// const animate = async (e) => {
//     const el = e.currentTarget
//     el.textContent = 'GO'

//     await wait(2000)
//     el.classList.add('circle')
//     await wait(500)
//     el.classList.add('danger');
//     await wait(250)
//     el.classList.remove('circle')
//     await wait(300)
//     el.classList.add('purple')
//     await wait(500)
//     el.classList.add('fadeOut')
// }

// go.addEventListener('click', animate)

//* Go back to `makePizza` function. Catch its error using async await.
// function makePizza(toppings = []) {
//     return new Promise((resolve, reject) => {
//         if (toppings.includes('melon')) {
//             reject('Brav? What is wrong with you?')
//     }
//     const amountOfTimeToBake = 500 + (toppings.length * 500)
        
//     setTimeout(() => resolve(`Here is your pizza🍕 with toppings ${toppings.join(' ')}`), amountOfTimeToBake)
//     })
// }

// async function go() {
//     try {
//         window.addEventListener('click', () => console.log('💥💥'))
//         const pizza = await makePizza(['melon'])
//         console.log(pizza)
//     } catch (error) {
//         // window.addEventListener('click', () => console.log('💥💥'))
//         console.log('Ohh Noooo')
//         console.log(error)
//     }
// }

// go()

//* Give the error it's own separete function.
// function makePizza(toppings = []) {
//     return new Promise((resolve, reject) => {
//         if (toppings.includes('melon')) {
//             reject('Brav? What is wrong with you?')
//     }
//     const amountOfTimeToBake = 500 + (toppings.length * 500)
        
//     setTimeout(() => resolve(`Here is your pizza🍕 with toppings ${toppings.join(' ')}`), amountOfTimeToBake)
//     })
// }

// function handleError(error) {
//     console.log('Ohh Noooo')
//     console.log(error)
// }

// async function go() {
//     const pizza = await makePizza(['melon']).catch(handleError)
//     console.log(pizza)
// }

// go()

//* Rather than catching the function inside the async function, add it to the function call
// function makePizza(toppings = []) {
//     return new Promise((resolve, reject) => {
//         if (toppings.includes('melon')) {
//             reject('Brav? What is wrong with you?')
//     }
//     const amountOfTimeToBake = 500 + (toppings.length * 500)
        
//     setTimeout(() => resolve(`Here is your pizza🍕 with toppings ${toppings.join(' ')}`), amountOfTimeToBake)
//     })
// }

// function handleError(error) {
//     console.log('Ohh Noooo')
//     console.log(error)
// }

// async function go() {
//     const pizza = await makePizza(['melon'])
//     console.log(pizza)
//     return pizza
// }

// go().catch(handleError)

//* Complete the callback using then that shows result for both resolve, reject
// function makePizza(toppings = []) {
//     return new Promise((resolve, reject) => {
//         if (toppings.includes('melon')) {
//             reject('Brav? What is wrong with you?')
//     }
//     const amountOfTimeToBake = 500 + (toppings.length * 500)
        
//     setTimeout(() => resolve(`Here is your pizza🍕 with toppings ${toppings.join(' ')}`), amountOfTimeToBake)
//     })
// }

// function handleError(error) {
//     console.log('Ohh Noooo')
//     console.log(error)
// }

// async function go() {
//     const pizza = await makePizza(['melonX'])
//     return pizza
// }

// go().then(serve => {
//     console.log(serve)
// }).catch(handleError)

//* Insted of callback use a function. Handle error on this functions call
// function makePizza(toppings = []) {
//     return new Promise((resolve, reject) => {
//         if (toppings.includes('melon')) {
//             reject('Brav? What is wrong with you?')
//     }
//     const amountOfTimeToBake = 500 + (toppings.length * 500)
        
//     setTimeout(() => resolve(`Here is your pizza🍕 with toppings ${toppings.join(' ')}`), amountOfTimeToBake)
//     })
// }

// function handleError(error) {
//     console.log('Ohh Noooo')
//     console.log(error)
// }

// async function go() {
//     const pizza = await makePizza(['melon'])
//     return pizza
// }

// async function goGo() {
//     const result = await go()
// }

// goGo().catch(handleError)

//* Make a safe function with a Higher order function
// function makePizza(toppings = []) {
//     return new Promise((resolve, reject) => {
//         if (toppings.includes('melon')) {
//             reject('Brav? What is wrong with you?')
//     }
//     const amountOfTimeToBake = 500 + (toppings.length * 500)
        
//     setTimeout(() => resolve(`Here is your pizza🍕 with toppings ${toppings.join(' ')}`), amountOfTimeToBake)
//     })
// }

// function handleError(error) {
//     console.log('Ohh Noooo')
//     console.log(error)
// }

// async function go() {
//     const pizza = await makePizza(['melon'])
//     return pizza
// }

// function makeSafe(fn, errorHandler) {
//     return function () {
//         fn().catch(handleError)
//     }
// }

// const safeGo = makeSafe(go, handleError)

// safeGo()

//* Try to log a variable that is not declared
// console.log(x)

//* Catch that error
// try {
//     console.log(x)
// } catch(error) {
//     console.log('Error ' + error)
// }

//* Create a function that takes in a number & doubles it. Try to pass a string than catch the error
function double(number) {
    if (isNaN(number)) {
        throw new Error(number + ' is not a number')
    }
    return number * 2
}

try {
    const y = double('1x')
    console.log(y)
} catch (error) {
    console.log(error)
}