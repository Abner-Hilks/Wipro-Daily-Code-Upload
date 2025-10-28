// mathUtils.js

// Example of Default Parameter
export function multiply(a, b = 1) {
  return a * b; // if b is not passed, it defaults to 1
}

// Some mathematical utility functions using arrow functions
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;
export const square = (x) => x * x;
export const cube = (x) => x * x * x;

// Factorial using recursion
export const factorial = (n) => (n <= 1 ? 1 : n * factorial(n - 1));

// Power function
export const power = (base, exponent = 2) => base ** exponent;
