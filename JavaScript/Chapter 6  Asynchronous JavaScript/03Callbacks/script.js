'use strict';


// import * as fs from 'fs';
// import { fs } from 'fs';
// const fs = require('fs')
// import fs from `node:fs`
// const fs = require('fs');

// fs.readFile(`./text.txt`, `utf8`, (err, data) => {
//   if (err) {
//     console.log(`Error`);
//     throw err;
//   }
//   console.log(data);
// });

const getTodos = (callback) => {
  const request = new XMLHttpRequest();

  request.addEventListener(`readystatechange`, () => {
    if (request.readyState === 4 && request.status === 200) {
      callback(undefined, request.responseText)
    } else if (request.readyState === 4) {
      callback(`Could not fetch data`, undefined)
    }
  })

  request.open(`GET`, `https://jsonplaceholder.typicode.com/todos/`)
  request.send()
}

console.log(1)
console.log(2)

// getTodos((err, data) => {
//   console.log(`Callback Fired`)
//   if (err) {
//     console.log(err)
//   } else {
//     console.log(data)
//   }
// })

console.log(3)
console.log(4)


function toggle(e) {
  e.target.classList.toggle(`danger`)
}

document.querySelector(`button`).addEventListener(`click`, toggle)

const posts = [
  {title: 'Post 1', body: 'Post Body 1'},
  {title: 'Post 2', body: 'Post Body 2'}
]

function createPost(post, cb) {
  setTimeout(() => {
    posts.push(post);
    cb()
  }, 2000)
}

function getPosts() {
  setTimeout(() => {
    posts.forEach(
      function (post) {
        const div =document.createElement(`div`)
        div.innerHTML = `<strong>${post.title}</strong> - ${post.body}`;
        document.querySelector(`.posts`).appendChild(div)
      }
    )
  }), 1000
}


createPost( {title: 'Post 3', body: 'Post Body 3'}, getPosts)

