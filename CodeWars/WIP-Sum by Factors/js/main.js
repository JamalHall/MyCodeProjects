/*
Given an array of positive or negative integers

I= [i1,..,in]

you have to produce a sorted array P of the form

[ [p, sum of all ij of I for which p is a prime factor (p positive) of ij] ...]

P will be sorted by increasing order of the prime numbers. The final result has to be given as a string in Java, C#, C, C++ and as an array of arrays in other languages.

Example:
I = [12, 15]; //result = [[2, 12], [3, 27], [5, 15]]
[2, 3, 5] is the list of all prime factors of the elements of I, hence the result.

Notes:

It can happen that a sum is 0 if some numbers are negative!
Example: I = [15, 30, -45] 5 divides 15, 30 and (-45) so 5 appears in the result, the sum of the numbers for which 5 is a factor is 0 so we have [5, 0] in the result amongst others.

In Fortran - as in any other language - the returned string is not permitted to contain any redundant trailing whitespace: you can use dynamically allocated character strings.

For each number in the array, find its decomposition in prime factors.

Gather all the prime factors you've found in the previous step in a single sorted array without duplicate.

For each prime factor P in the array of the previous step, make a pair which first element is P itself, and which second element is the sum of the elements of the input array that include P in their prime factor decomposition. That's your output.
*/

// factor primes 
//3 arrays merge to one array add all primes to a set turn set to array iterate through values in set to push to array

function sumOfDivided(lst) {
  let primes = []
  let num =12

  check(num) 

  function check(n){
    let nArr=[]
    while(n>0){
    nArr.push(n)
    n--}
    console.log(nArr)
    return nArr
  }
for (e of check(num)){
     for (var i = 2; i < e; i++) {
        if(e%i!==0){
          primes.push(e)
          };
    }
    
    }






  // for(let n=0; n<lst.length; n++){
  //   let div=2
  //     while(div<=lst[n]){
  //     lst[n]%div===0?primes.push(div):0
  //     div++
  //     }    
  // }
  console.log(primes)
}

console.log(sumOfDivided([2, 12]), '   [[2, 12], [3, 14], [3, 12]] ')
console.log(sumOfDivided([12, 15]), '  [[2, 12], [3, 27], [5, 15]]   ')
 