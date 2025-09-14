import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push, onValue } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
    databaseURL: 'https://scrimba-6497b-default-rtdb.asia-southeast1.firebasedatabase.app/'
}

const app = initializeApp(appSettings)
const database = getDatabase(app)
const booksInDB = ref(database, "books")

const booksEl = document.getElementById("books")

function appendBookToBooksListEl(bookValue) {
    booksEl.innerHTML += `<li>${bookValue}</li>`
}

function clearBooksListEl() {
    booksEl.innerHTML = ""
}

onValue(booksInDB, function (snapshot) {
    clearBooksListEl()

    let bookArray = Object.values(snapshot.val())

    // bookArray.map(book => {
    //     console.log(book);
    // })

    for (let i = 0; i < bookArray.length; i++) {
        console.log(bookArray[i]);
        appendBookToBooksListEl(bookArray[i])
    }

    console.log(bookArray)
})





// const app = initializeApp(appSettings)
// const database = getDatabase(app)
// const shoppingListInDB = ref(database, "shoppingList")

// const inputFieldEl = document.getElementById("input-field")
// const addButtonEl = document.getElementById("add-button")
// const shoppingListEl = document.getElementById("shopping-list")

// const formReset = () => {
//      inputFieldEl.value = ""
// }

// const addValue = (shoppingListEl, inputValue) => {
//     const li = document.createElement("li")
//     li.textContent = inputValue
//     shoppingListEl.appendChild(li)
// }

// addButtonEl.addEventListener("click", function() {
//     let inputValue = inputFieldEl.value

//     push( shoppingListInDB ,inputValue)

//     addValue(shoppingListEl, inputValue)
    
//     // Clear input field
//     formReset()
// })
