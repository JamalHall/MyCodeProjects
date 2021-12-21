/*
Define a function that takes one integer argument and returns logical value true or false depending on if the integer is a prime.

Per Wikipedia, a prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

Requirements
You can assume you will be given an integer input.
You can not assume that the integer will be only positive. You may be given negative numbers as well (or 0).
NOTE on performance: There are no fancy optimizations required, but still the most trivial solutions might time out. Numbers go up to 2^31 (or similar, depends on language version). Looping all the way up to n, or n/2, will be too slow.
Example
is_prime(1)  'false
is_prime(2)   true 
is_prime(-1)  false 
*/


// my fav version but slow  I can see primes and composites if I want to
isPrime = (num)=>{
  if(num<2) return false
  let prime=[]
  for(let factor=2; num>=factor; )
  if(num%factor==0){
    prime.push(num)
    num = num/factor       
  } else {
    factor++
  }
  return prime.length==1?true:false
}


// //version 2 faster 
// function isPrime(num) {
//   for(var i = 2; i <= Math.sqrt(num); i++)
//       if(num % i === 0){ 
//         return false
//         }
//     return num > 1
//   }


//   //version 1 correct but timesout
//   function isPrime(num) {
//     for(var i = 2; i <num; i++)
//         if(num % i === 0){ 
//           return false
//           }
//       return num > 1
//     }




// like version 2 but squaring i
function isPrime(num) {
  //TODO
  for (let i = 2; i * i <= num; i++)
        if (num % i === 0)
          return false; 
    return num > 1;
}


  


// like version 2 but explains more
function isPrime(num) {
  // one, zero and negative numbers is never prime
  if (num < 2) {
    return false;
  }
  // if is 2, is prime
  if (num == 2) {
    return true;
  }
  // if divisible by 2, is not prime
  if (num % 2 == 0) {
    return false;
  }
  // check all potential divisors up to the square root
  // skip even numbers since we've already tried
  // dividing by 2
  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i == 0) {
      return false;
    }
  }
  // if we reach this point, we have a prime
  return true;
}



console.log(isPrime(83), true);
console.log(isPrime(97), true);
console.log(isPrime(23),true) 
console.log(isPrime(-3),false) 
console.log(isPrime(15),false)
console.log(isPrime(1),false)
console.log(isPrime(2),true)
console.log(isPrime(4),false)
console.log(isPrime(75),false)