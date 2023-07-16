/*
An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

"Dermatoglyphics" --> true
"aba" --> false

*/

function isogram(str){
  iso = str.toLowerCase().split('')
  .filter((e,i,iso) => iso.indexOf(e) === iso.lastIndexOf(e))
  .join('')
  console.log(iso)
  return (iso===str.toLowerCase())?true:false 
}

console.log( isogram("Dermatoglyphics") ,'Expected  --> true')
console.log( isogram("aba") ,'Expected   --> false') 
console.log( isogram("moOse") ,'Expected   --> false')  
console.log( isogram("isIsogram") ,'Expected   --> false')
console.log( isogram("") ,'Expected   --> true')   


//  a wow example solution function 
// isIsogram(str){ 
//   return !str.match(/([a-z]).*\1/i)
// }