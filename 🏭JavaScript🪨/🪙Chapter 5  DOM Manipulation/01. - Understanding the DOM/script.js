// console.log('Test');

// console.log(window.document);

// console.log(document);

// console.log(document.body);

// // console.log(document.body.innerHTML);

// // console.log(document.body.innerText);

// console.log(document.links);

// console.log(document.links[0]);

// // console.log(document.body.innerHTML.h1);
// document.body.innerHTML = '<h1>Test</h1>';

// document.write('Hello');

// // console.log(document.getElementById(#main));

// // document.getElementById('main').innerHTML = 'Hello World';

// const main = document.getElementById('main');
// main.innerHTML = '<h1>Test Test</h1>';

// document.getElementById('demo').innerHTML = 'Hello World';

// document.addEventListener('DOMContentLoaded', function () {
//   const main = document.getElementById('main');
//   main.innerHTML = '<h1>Test Test</h1>';

//   document.getElementById('demo').innerHTML = 'Hello World';
// });

// console.log(document.getElementById('main'));
// const main = document.getElementById('main');
// main.innerHTML = '<h1>Main says hello!</h1>';

// console.log((document.querySelector('#main h1').innerHTML = '<p>Test</p>'));

// document.querySelector('#main h1').innerHTML;

// console.log(document.querySelector('.main'));

let output;

const parent = document.querySelector('.main');

output = parent.childNodes;
console.log(output);
output = parent.childNodes[0].nodeName;
output = parent.childNodes[5].innerText;
parent.childNodes[5].innerText = 'Papi Chulu';

parent.childNodes[5].style.color = 'red';
parent.childNodes[5].style.background = 'Black';
parent.childNodes[5].style.padding = '2rem';

output = parent.firstChild;

parent.firstChild.textContent = 'Test';
parent.lastChild.textContent = 'Test';

child.parentNode.style.backgroundColor = 'Yellow';

console.log(output);
