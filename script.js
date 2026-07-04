//! Scope
// function scope() {
//   if (true) {
//     var x = 'var';
//     let y = 'let';
//     const z = 'const';
//   }
//   console.log(x);

//   if (true) {
//     let y = 'let1';
//     const z = 'const1';
//   }
//   console.log(x);
//   console.log(y);
//   console.log(z);
// }

// scope();

//! TDZ
// console.log(a);
// console.log(b);
// console.log(c);

// var a = 'var';
// let b = 'let';
// const c = 'const';

//! Reassignment & Redeclaration
// var a = 1;
// var a = 10;
// a = 100;

// let b = 2;
// b = 200;

// const c = 3;
// c = 300;

//! Global Object Property
// var globalVar = 'Var';
// let globalLet = 'Let';

// console.log(window.globalVar);
// console.log(window.globalLet);

// for (var i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 100);
// }

// for (let i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 100);
// }
// <- TDZ for 'x' starts here (top of the block scope)

// console.log(x); //! Ref. Error.

// let x = 10; //! <- TDZ ends here (Variable is initialized)

// console.log(x); // 10

// console.log(typeof text);
// console.log(typeof x);

// let x = 10;

// class Person {
//   constructor() {
//     this.name = 'O_k';
//   }
// }

// const test = new Person();
// console.log(test);

// function process() {
//   if (isLoggedIn) {
//     var isLoggedIn = true;
//     showDash();
//   }
// }

// function outer() {
//   let count = 0;

//   function inner() {
//     count++;
//     console.log(count);
//   }

//   return inner;
// }

// const counter = outer();

// counter();
// counter();
// counter();
// counter();
// counter();

// outer runs, create count var
// inner() is returned
// outer() is finished but count is not distoied
// inner() still has access to count

// Why? Data encapsulation

function createCounter() {
  let count = 0; // Private Variable

  return {
    increment() {
      count++;
      console.log(count);
    },
    decrement() {
      count--;
      console.log(count);
    },
    getValue() {
      return count;
    },
  };
}

const counter = createCounter();

// counter.increment();
// counter.increment();

// counter.decrement();
// counter.decrement();

// console.log(counter.getValue());

counter.increment()