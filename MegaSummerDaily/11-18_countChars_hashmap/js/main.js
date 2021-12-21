/*
Make sure you understand these before taking a look at the question:
Objects (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects)

👆🏾  Make sure you remember/review bracket notation for objects!  You can check if a property exists and increment a value tied to that property HINT HINT!

Count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}.


Hint: loop through the characters and use bracket notation to add one to the value for that letter in the object or add that letter as a property of the object with the value of 1

From: https://www.codewars.com/kata/52efefcbcdf57161d4000091

*/
function occurringChars(str) { 
let chars = str.split('')
let ob = {}
for(e of chars){
let count = chars.filter(element=>e===element).length
ob[e]=count
}
return ob
}
console.log(occurringChars('aba'),'returned', "{'a': 2, 'b': 1}")

