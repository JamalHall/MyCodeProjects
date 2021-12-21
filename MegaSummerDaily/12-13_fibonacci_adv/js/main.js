/*
Can you solve with a for loop like Friday? How about with recursion?  

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

Hint:  https://www.youtube.com/watch?v=zg-ddPbzcKM

From: https://leetcode.com/problems/fibonacci-number/

More videos for homework:
https://youtu.be/vYquumk4nWw
https://www.youtube.com/watch?v=hISXxjX6Ino


*/
//iterative solution from class 113 //console.log(fib(9),34) 31
function fib(n){
  let arr = [0,1]
  for(let i = 2; i <= n; i++){
    arr[i] = arr[i - 1] + arr[i - 2]
  }
  return arr[n]
}

//recursion without memoization 212  //console.log(fib(9),34) 383
function fib(n){
    if(n<2){return n}
   return fib(n-1)+fib(n-2)
  }



// My recursive solution with memoization 210  //console.log(fib(9),34) 82

function fib(n,arr){
  arr = (!arr)?[0,1]:arr
  if(n<2){return n}else{  // forgot to add a default case. Added to get f(0) to work
  let prev2 = arr[arr.length-2]
  let prev1 = arr[arr.length-1]
  let next = prev1 + prev2
  arr.push(next)
  console.log(arr)   
  if(!arr[n]){ 
    return fib(n,arr)
  } else{
    return arr[n]
  }
}
}


// another recursive solution with memoization 101 //console.log(fib(9),34) 75
let arr = [0,1]
function fib(n){
  if(n<2){return n}else{  // default case       
  let prev2 = arr[arr.length-2]
  let prev1 = arr[arr.length-1]
  let next = prev1 + prev2
  arr.push(next)
  console.log(arr)   
  if(!arr[n]){ 
    return fib(n)
  } else{
    return arr[n]
  }
}
}


// leon's recursion with memoization 100 //console.log(fib(9),34) 92
const memo = {}
function fib(n) {
    if(n <= 1){
        return n
    }else if( memo[n] ){
        return memo[n]
    }else{
        let result = fib(n - 1) + fib(n - 2)
        memo[n] = result
        return result
    }
}



console.log(fib(6), '=> 8')
console.log(fib(5), '=> 5')
console.log(fib(4), '=> 3')
console.log(fib(3), '=> 2')
console.log(fib(2), '=> 1')
console.log(fib(0), '=> 0')
