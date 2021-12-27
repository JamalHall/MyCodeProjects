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
document.querySelector('#btn').addEventListener('click',fibonacci)

 
function fibonacci() {
  
  let x=parseInt(document.querySelector('#input').value)
   arr1.length=0
   num1=1
   num2=count=0

  for(let i=0; i<x/2; i++){
  arr1.push(count)
  console.log(count)
  num1 = num1 + num2
  count = num1  
 
  arr1.push(count)
  console.log(count) 
  num2 = num1 + num2
  count = num2  
   
    }
    document.querySelector('#result').innerText = arr1
return arr1
}

//Refactoring solution
function fib(n){
  let num1 = 0
  let num2 = 1
  let memory
  let fibonacciArray = []

  for (let i = 0; i < n; i++){
      memory = num2 // store the second number into memory
      num2 += num1
      num1 = memory // make the first number in the next loop the stored value 
      fibonacciArray.push(num1)
  }
  return num1  // the last number stored in the array
}


// // L#100devs Solution
function fib(n){
  let arr=[0,1]
  for(let i=2; i<=n; i++){
  arr[i] = arr[i-1] +arr[i-2]
  }
  return arr[n]
}