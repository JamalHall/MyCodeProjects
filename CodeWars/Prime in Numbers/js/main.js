/*
Given a positive number n > 1 find the prime factor decomposition of n. The result will be a string with the following form :

 "(p1**n1)(p2**n2)...(pk**nk)"
with the p(i) in increasing order and n(i) empty if n(i) is 1.

Example: n = 86240 should return "(2**5)(5)(7**2)(11)"
*/
function primeFactors(n){
    const primes = {}
    let str = ''
    for (let factor = 2; factor <= n; ) {
      if (n % factor == 0) {
        primes[factor] = primes[factor] + 1 || 1
        console.log(primes)
        n = n/factor
        if (n % factor) {
        console.log(n,factor,n%factor)
        str = str + `(${factor}${(primes[factor] > 1) ? `**${primes[factor]}` : ''})`
        }
      } else {
        factor++
      }
    }
    return str
  }



console.log(primeFactors(12),'=>(2**2)(3)')
console.log(primeFactors(86240),'=> (2**5)(5)(7**2)(11)')
console.log(primeFactors(7775460),'=>(2**2)(3**3)(5)(7)(11**2)(17)')