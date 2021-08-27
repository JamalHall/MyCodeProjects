// The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

// F(0) = 0, F(1) = 1
// F(n) = F(n - 1) + F(n - 2), for n > 1.
// Given n, calculate F(n).

// Example 1:

// Input: n = 2
// Output: 1
// Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.
// Example 2:

// Input: n = 3
// Output: 2
// Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2.
// Example 3:

// Input: n = 4
// Output: 3
// Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3.

// my solution
let num1 = 1  
  let num2 = 0  
  let count = 0
  let arr1 = [] 
function fibonacci(limit) {
  for(let i=0; i<limit/2; i++){
  arr1.push(count)
  num1 = num1 + num2
  count = num1  
  console.log(count)
  arr1.push(count)
  num2 = num1 + num2
  count = num2  
  console.log(count)  
    }
return arr1
}
fibonacci(10)



// // L#100devs Solution
// function fib(n){
//   let arr=[0,1]
//   for(let i=2; i<=n; i++){
//   arr[i] = arr[i-1] +arr[i-2]
//   }
//   return arr[n]
// }