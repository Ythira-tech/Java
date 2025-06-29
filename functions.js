// STRING MANIPULATION FUNCTIONS
// Reverse a String
function reverseString(str) {
  return str.split('').reverse().join('');
}
// Count Characters
function countCharacters(str) {
  return str.length;
}
// Capitalize Words
function capitalizeWords(sentence) {
  return sentence
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

// ARRAY FUNCTIONS
// Find Max and Min
function findMax(arr) {
  return Math.max(...arr);
}

function findMin(arr) {
  return Math.min(...arr);
}
// Sum of Array
function sumArray(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}
// Filter Array
function filterEvenNumbers(arr) {
  return arr.filter(num => num % 2 === 0);
}

// MATHEMATICAL FUNCTIONS
// Factorial
function factorial(n) {
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}
// Prime Number
function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}
// Fibonacci Sequence
function fibonacci(n) {
  const fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib.slice(0, n);
}