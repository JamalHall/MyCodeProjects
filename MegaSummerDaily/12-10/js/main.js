/*
The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

F(0) = 0, F(1) = 1
F(n) = F(n - 1) + F(n - 2), for n > 1.
Given n, calculate F(n).

Example 1:

Input: n = 2
Output: 1
Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.
Example 2:

Input: n = 3
Output: 2
Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2.
Example 3:

Input: n = 4
Output: 3
Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3.



Hint:  Create an array [0,1] and then a loop that starts at i =2. Loop all the way to n (the num passed in) add the previous two numbers to get the next number to put in the array. At the end just return the last number

From: https://leetcode.com/problems/fibonacci-number/

*/

// with js methods
fibonacci=(n)=>{
const fArr = [0,1]
let next = 1
for(let i = 2; i<=n; i++ ){
  fArr.push(next)
  next = fArr.slice(fArr.length-2).reduce((pv,cv)=>pv+cv) 
  }
  console.log(fArr)
  return fArr[n]
}
console.log(fibonacci(6), '=> 8')
console.log(fibonacci(5), '=> 5')
console.log(fibonacci(4), '=> 3')
console.log(fibonacci(3), '=> 2')
console.log(fibonacci(2), '=> 1')
console.log(fibonacci(0), '=> 0')


//without js methods
function fibo(num){
const arr = [0,1]
let next = 1
for(let i=2; i<=num; i++){
  arr.push(next)
  next = arr[i-1] + arr[i]
} 
return arr[num]
}

console.log(fibo(6), '=> 8')
console.log(fibo(5), '=> 5')
console.log(fibo(4), '=> 3')
console.log(fibo(3), '=> 2')
console.log(fibo(2), '=> 1')
console.log(fibo(0), '=> 0')

// Leon's Method without methods
function fib(n){
  let arr = [0,1]
  for(let i = 2; i <= n; i++){
    arr[i] = arr[i - 2] + arr[i - 1]
  }
  return arr[n]
}
console.log(fib(6), '=> 8')
console.log(fib(5), '=> 5')
console.log(fib(4), '=> 3')
console.log(fib(3), '=> 2')
console.log(fib(2), '=> 1')
console.log(fib(0), '=> 0')