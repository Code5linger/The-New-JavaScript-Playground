//! Local Storage
// * Insert Some velues inside the local storage, ex: name = Sakib
// localStorage.setItem("name", "Sakib")

//* Using the local storage value log the name
// console.log(localStorage.getItem("name"));

// * Insert Some velues inside the local storage, where key = 1C69, & value is an Object,  { "Test": 'O_o', "Demo": 'Demo!' }
// localStorage.setItem('1C69', JSON.stringify({ "Test": 'O_o', "Demo": 'Demo!' }))

//* Retrieving the value from localStorage in the site ex: log each item (Test, Demo)
const localValue = JSON.parse(localStorage.getItem("1C69"))
// console.log(localValue);
// console.log(localValue.Test);
// console.log(localValue.Demo);

//* Create 4 Buttons that represnets set, get, remove, clear local storage. 
//* Create a function that adds a key & value to the local storage. 
function setLocalStorage(key, value) {
    localStorage.setItem(key, value)
}

// setLocalStorage("fName", "Sakib")
// setLocalStorage("lName", "Ahmed")
//* Create a function that log the data from the local storage
function getLocalStorage(key) {
    console.log(localStorage.getItem(key));
}

// getLocalStorage("fName")
// getLocalStorage("lName")

//* Create a function that remove the data from the local storage
function removeLocalStorage(key) {
    localStorage.removeItem(key)
}

removeLocalStorage('fname')

//* Create a function that clear all the data local storage
function clearLocalStorage() {
    localStorage.clear()
}

//* Comment Out All the Code that set data. Close the browser, than reopen it. Run all the previous code.

//! Session Storage
//* Insert Some velues inside the Session Storage, ex: name = Ahmed
// sessionStorage.setItem("nameLast", "Ahmed")

//* Using the Session storage value log the name
// console.log(sessionStorage.getItem("nameLast"));

//* Create 4 Buttons that represnets set, get, remove, clear local session. 

//* Create a function that adds a key & value to the session storage. 
function setSessionStorage(key, value) {
    sessionStorage.setItem(key, value)
}
setSessionStorage('Test', 'Test')

//* Create a function that log the data from the session storage
function getSessionStorage(key) {
    console.log(sessionStorage.getItem(key));
}

//* Create a function that remove the data from the session storage
function removeLocalStorage(key) {
    sessionStorage.removeItem(key)
}

//* Create a function that clear all the data session storage
function clearLocalStorage() {
    sessionStorage.clear()
}

//* Comment Out All the Code that set data. Close the browser, than reopen it. Run all the previous code.