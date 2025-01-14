//* Write 4 console logs without any gap

//* In the middle write a callback function that waits 2 sec
// console.log(1)
// console.log(2)

// setTimeout( () => console.log('callback function fired'), 2000)

// console.log(3)
// console.log(4)

//* Go to `https://jsonplaceholder.typicode.com/` and run the demo script on the site. Than copy the link and visit it

//* A Create a new Request Object
const request = new XMLHttpRequest()

//* C In the console's network section we can see we got the response. Now show it in the window. But first log the states of the request
request.addEventListener('readystatechange', () => {
    // console.log(request, request.readyState)
})

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
request.addEventListener('readystatechange', () => {
    // console.log(request, request.readyState)
    if (request.readyState === 4 && request.status === 200) {
        console.log(request, request.responseText)
    } else if (request.readyState === 4) {
        console.log('Could not fetch the data')
    }
})


//* B Using the request object, get all the objects from `https://jsonplaceholder.typicode.com/`
request.open('GET', 'https://jsonplaceholder.typicode.com/todoXs/')
request.send()

