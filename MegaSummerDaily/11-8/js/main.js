/*
You will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.

For example:

dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].
dup(["kelless","keenness"]) = ["keles","kenes"].
Strings will be lowercase only, no spaces 

dup(["ccooddddddewwwaaaaarrrrsssss","piccaninny","hubbubbubboo"]),['codewars','picaniny','hubububo'])
dup(["abracadabra","allottee","assessee"]),['abracadabra','alote','asese'])
dup(["kelless","keenness"]), ['keles','kenes'])


Hint: map through the arrays, each return in the map should be the string split and filtering for each letter that does not equal the one before it then join them up - we had this pattern before! 

From: https://www.codewars.com/kata/59f08f89a5e129c543000069

*/
function removeConsecutiveDuplicates(arr) { 
  let removed = []
  for(el of arr){
  removed.push(el.split('').filter((e,i,a) => e!==a[i+1]).join(''))
 }
 return(removed)
}
 

console.log(removeConsecutiveDuplicates(["kelless","keenness"]),'returned', ['keles','kenes'])

console.log(removeConsecutiveDuplicates(["ccooddddddewwwaaaaarrrrsssss","piccaninny","hubbubbubboo"]),'returned',['codewars','picaniny','hubububo'])

console.log(removeConsecutiveDuplicates(["abracadabra","allottee","assessee"]),'returned',['abracadabra','alote','asese'])
 
// //nice code wars solution
// function dup(array) {
//     return array.map(word => word.split('').filter( (letter, index) => letter !== word[index + 1]).join(''))
//     };

// //another code wars solution
// function dup(s) {
//   //..
//   // look into the array
//     // access individual string
//     //split string into array
//     //set array to splitLetterArray
//     //loop though splitLetterArray
//       //if a letter is equal to the next , remove it from splitLetterArray
//     let different = []
//     let result = []
  
//   for(let i = 0; i<s.length;i++){
//     for(let j= 0; j<s[i].length;j++){
//       if(s[i][j]!==s[i][j+1]){
//         different.push(s[i][j])
//         }
//       if(j === s[i].length-1){
        
//         result.push(different.join(""))
//         different = []
//         }
//       }
//     }
       
//   return (result) };