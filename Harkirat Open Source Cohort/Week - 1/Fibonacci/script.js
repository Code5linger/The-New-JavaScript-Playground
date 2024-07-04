// console.log('Test');

// // 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144,

// function fibonacci(n) {
//   const init = [0, 1];

//   for (let i = 2; i < n; i++) {
//     init[i] = init[i - 1] + init[i - 2];
//   }
//   return init;
// }

// function sumArray(arr) {
//   return arr.reduce((sum, current) => sum + current, 0);
// }

// console.log(sumArray(fibonacci(2)));
// console.log(sumArray(fibonacci(3)));
// console.log(sumArray(fibonacci(4)));
// console.log(sumArray(fibonacci(5)));
// console.log(sumArray(fibonacci(6)));

// console.log(fibonacci(5));
// console.log(fibonacci(10));
// console.log(fibonacci(20));

// const num = 100;

// let x = 0,
//   y = 1;

// let fn = x + y;

// while (fn < num) {
//   fn = x + y;
//   x = y;
//   y = fn;
// }

// function fib(n) {
//   fq = [0, 1];

//   if (n <= 1) {
//     console.log(fq[0]);
//   }
// }

function fibonacciSeries(n) {
  let fibSeries = [];

  // First two numbers in the Fibonacci sequence
  let a = 0,
    b = 1;

  // Push initial values into the array
  fibSeries.push(a);
  if (n > 1) {
    fibSeries.push(b);
  }

  // Generate subsequent Fibonacci numbers
  for (let i = 2; i < n; i++) {
    let c = a + b;
    fibSeries.push(c);
    a = b;
    b = c;
  }

  // Print the Fibonacci series
  console.log('Fibonacci Series:');
  console.log(fibSeries.join(', '));
}

// Example usage:
fibonacciSeries(10); // Prints Fibonacci series with 10 terms
