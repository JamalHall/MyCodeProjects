/*
Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.

Examples
[7] should return 7, because it occurs 1 time (which is odd).
[0] should return 0, because it occurs 1 time (which is odd).
[1,1,2] should return 2, because it occurs 1 time (which is odd).
[0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).


*/
// using a hash map 

function findOdd(A) {
let mapOdd ={}
for(element of A ){
  mapOdd[element] = mapOdd[element] +1||1 

  // mapOdd[element]?mapOdd[element]++ : mapOdd[element] = 1  // using ternary  also works

  }
  for(element in mapOdd)
  if(mapOdd[element]%2===1){
  return +element 
}
console.log(mapOdd)
}

console.log(findOdd([7]),'=>7')
console.log(findOdd([0]),'=>0')
console.log(findOdd([1,1,2]),'=>2')
console.log(findOdd([0,1,0,1,0]),'=>0')
console.log(findOdd([1,2,2,3,3,3,4,3,3,3,2,2,1]),'=>4')


// brute force solution 

  function findOdd(A) {
    var result = 0;
  for(var i = 0 ; i<A.length;i++){
  var count = 0 ;
    for(var j = 0 ; j<A.length;j++){
       if(A[i]==A[j])
       count++;
     }
     if(count%2==1)
     {
       result = A[i];
     }
  }
  return result;
}