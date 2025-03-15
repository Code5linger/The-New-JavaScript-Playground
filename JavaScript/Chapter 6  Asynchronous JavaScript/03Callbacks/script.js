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
// function double(number) {
//     if (isNaN(number)) {
//         throw new Error(number + ' is not a number')
//     }
//     return number * 2
// }

// try {
//     const y = double('1x')
//     console.log(y)
// } catch (error) {
//     console.log(error)
// }

//* At try catch block, log something anyway
// function finallyDemo() {
//     console.log(x)
// }

// try {
//     finallyDemo()
// } catch (error){
//     console.log(error)
// } finally {
//     console.log('It will run anyway!')
// }

//* Make sure you get an error. At try block, try to log something before & after calling the function
// function finallyDemo() {
//     console.log(x)
// }

// try {
//     console.log('I forsee an error')
//     finallyDemo()
//     console.log('It will never run!')
// } catch (error){
//     console.log(error)
// } finally {
//     console.log('It will run anyway!')
// }

//* After catching an errorn, Insted of logging just a string log an object. ex: Custom Error: Division failed because x is not defined - Error Type: CustomError
function throwError() {
    try {
        failedDivision()
    } catch (error) {
        console.log(error.message + " - Error Type: " + error.name)
    }
}

function failedDivision() {
    let result

    try {
        // Intentionally using an undefined variable to trigger an error
        result = x / 10;
    } catch (error) {
        // Throw a custom error object
        throw {
            message: "Custom Error: Division failed because " + error.message,
            name: "CustomError"
        };
    }
}

// throwError();

//* Create switch cases for the following cases : Reference Error, Range Error, Type Error, URI Error, Syntax Error, Evaluation Error & default. 

function handleError(error) {
    switch (error.name) {
        case 'ReferenceError':
            console.log("Reference Error " + error.message);
            break;
        case 'RangeError':
            console.log("Range Error " + error.message);
            break;
        case 'TypeError':
            console.log("Type Error " + error.message);
            break;
        case 'URIError':
            console.log("URI Error " + error.message);
            break;
        case 'SyntaxError':
            console.log("Syntax Error " + error.message);
            break;
        case 'EvalError':
            console.log("Evaluation Error " + error.message);
            break;
        default:
            console.log("Error Type: " + error.name + " - Message: " + error.message);
            break
    }
}

//* Write Test cases for handleError(error) & log them
function testHandleError() {
    // Case 1: ReferenceError
    try {
        nonExistentFunction();
    } catch (error) {
        handleError(error); // Expected output: "Reference Error <message>"
    }

    // Case 2: RangeError
    try {
        new Array(-1); // Invalid array length
    } catch (error) {
        handleError(error); // Expected output: "Range Error <message>"
    }

    // Case 3: TypeError
    try {
        null.someFunction(); // Attempting to call a method on null
    } catch (error) {
        handleError(error); // Expected output: "Type Error <message>"
    }

    // Case 4: URIError
    try {
        decodeURIComponent('%'); // Invalid URI component
    } catch (error) {
        handleError(error); // Expected output: "URI Error <message>"
    }

    // Case 5: SyntaxError
    try {
        eval('invalid code'); // Syntax error in eval
    } catch (error) {
        handleError(error); // Expected output: "Syntax Error <message>"
    }

    // Case 6: EvalError
    try {
        throw new EvalError("Evaluation failed"); // Manually throwing an EvalError
    } catch (error) {
        handleError(error); // Expected output: "Evaluation Error <message>"
    }

    // Case 7: Custom Error
    try {
        throw {
            name: "CustomError",
            message: "This is a custom error message"
        };
    } catch (error) {
        handleError(error); // Expected output: "Error Type: CustomError - Message: This is a custom error message"
    }

    // Case 8: Generic Error
    try {
        throw new Error("This is a generic error");
    } catch (error) {
        handleError(error); // Expected output: "Error Type: Error - Message: This is a generic error"
    }
}

// testHandleError();

//! AJAX

//* Send a request to 'https://api.github.com/users/code5linger' & log the data using XMLHttpRequest
// const githubAPI = new XMLHttpRequest()

// githubAPI.addEventListener('readystatechange', (response) => {
//     if (response.target.status === 200) {
//         console.log(response.target.response);
//     }
// })

// githubAPI.open('GET', 'https://api.github.com/users/code5linger')
// githubAPI.send()

//* Fetch data from 'https://api.github.com/users/code5linger' & log the data as object using fetch
// fetch('https://api.github.com/users/code5linger')
//     .then((response) => { return response.json() })
//     .then((data) => console.log(data))

//* Inside the fetch function log the current status
// fetch('https://api.github.com/users/code5linger')
//     .then((response) => {
//         console.log(response.status);
//         return response.json()
//     })
//     .then((data) => console.log(data))

//* Create a json file that has 10 objects, each objects has a name & inoffice stats. Add all those name in the page as ul li. Give each li red or green bg based on there inoffice stats
// const xhr = new XMLHttpRequest()

// xhr.onreadystatechange = () => {
//     if (xhr.readyState === 4) {
//         let employees = JSON.parse(xhr.responseText)
//         let statusHTML = `<ul class='bulleted'>`

//         for (let i = 0; i < employees.length; i += 1) {
//             if (employees[i].inoffice === true) {
//                 statusHTML += '<li class="in">'
//             } else {
//                 statusHTML += '<li class="out">'
//             }
//             statusHTML += employees[i].name;
//             statusHTML += '</li>'
//         }
//         statusHTML += '</ul>'
//         document.getElementById('empList').innerHTML = statusHTML
//     }
// }

// xhr.open('GET', 'employees.json')
// xhr.send()

//* Add 'room' item to each objcts with random numbers. Than log them
// const roomRequest = new XMLHttpRequest()

// roomRequest.onreadystatechange = () => {
//     if (roomRequest.readyState === 4) {
//         let room = JSON.parse(roomRequest.responseText)
//         let statusHTML = `<ul class='rooms'>`

//         for (let i = 0; i < room.length; i += 1) {
//             if (room[i].inoffice === true) {
//                 statusHTML += '<li class="in">'
//             } else {
//                 statusHTML += '<li class="out">'
//             }
//             statusHTML += room[i].room;
//             statusHTML += '</li>'
//         }
//         statusHTML += '</ul>'
//         document.getElementById('empList').innerHTML = statusHTML
//     }
// }

// roomRequest.open('GET', 'employees.json')
// roomRequest.send()