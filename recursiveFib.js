// recursiveFib.js

var n = 11;
var fib = [0,1];

function fibonacci(n) {
  if (typeof fib[n] == 'undefined'){
    fib[n]= fibonacci(n-2) + fibonacci(n-1);}
  console.log(fib);
  return fib[n];
} 

console.log(fibonacci(n));