// with the primes function as another function
function showPrimes(n) {

    for (let i = 2; i < n; i++) {
      if (!isPrime(i)) continue; /*using continue the !prime triggers at false and the
       loop skips over at this point and does not use the rest og the code in this case 
       the console.log If a break is used the loop stops at the first !prime being true

  */
      console.log(i);
    }
  }
  
  function isPrime(n) {
    for (let i = 2; i < n; i++) {
      if (n % i == 0) return false;
    }
  
    return true;
  }


////with the primes included in the main function

// function showPrimes(n) {
//     nextPrime:
//     for (let i = 2; i < n; i++) {
  
//       // check if i is a prime number
//       for (let j = 2; j < i; j++) {
//         if (i % j == 0) continue nextPrime;
//       }
  
//       console.log(i);
//     }
//   }



  showPrimes(50)