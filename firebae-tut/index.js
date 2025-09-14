import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push, onValue } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
    databaseURL: 'https://scrimba-6497b-default-rtdb.asia-southeast1.firebasedatabase.app/'
}

const app = initializeApp(appSettings)
const database = getDatabase(app)
const shoppingListInDB = ref(database, "shoppingList")

const inputFieldEl = document.getElementById("input-field")
const addButtonEl = document.getElementById("add-button")
const shoppingListEl = document.getElementById("shopping-list")

addButtonEl.addEventListener("click", function() {
    let inputValue = inputFieldEl.value
    
    push(shoppingListInDB, inputValue)
    
    clearInputFieldEl()
})

onValue(shoppingListInDB, function (snapshot) {  
        const dataArray = Object.values(snapshot.val())
        shoppingListEl.innerHTML = ""
        
        for (let i = 0; i < dataArray.length; i++) {
            appendItemToShoppingListEl(dataArray[i])
        }
    } )

// onValue(shoppingListInDB, function(snapshot) {
//     const dataArray = Object.values(snapshot.val())
//     shoppingListEl.innerHTML = ""
    
//     for (let i = 0; i < dataArray.length; i++) {
//         appendItemToShoppingListEl(dataArray[i])
//     }
// })

function clearInputFieldEl() {
    inputFieldEl.value = ""
}

function appendItemToShoppingListEl(itemValue) {
    shoppingListEl.innerHTML += `<li>${itemValue}</li>`
}



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
