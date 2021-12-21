/*
Please use recursion! We'll identify the base cases and walk through a recursive solution together during standup!

Factorial

In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. For example,

5! = 5 * 4 * 3 * 2 * 1 = 120.

The value of 0! is 1.

#Your task

You have to create the function factorial that receives n and returns n!. You have to use recursion.


Hint:  Look at our fib solution. What are the base cases for factorial?

From: https://www.codewars.com/kata/5694cb0ec554589633000036

*/
// mt 1st attempt recursive solution 

function fact(n,f){
if(n==0){return (!f)?1:f
} else{
f = n*((!f)?1:f)
console.log(f)
n=n-1
return fact(n,f)
}
}

console.log(fact(9),'=>120')

//codewars solution
const factorial = n => {
  if (n <= 1) return 1;
  
  return n * factorial(n - 1);
}
console.log(factorial(5),'=>120')