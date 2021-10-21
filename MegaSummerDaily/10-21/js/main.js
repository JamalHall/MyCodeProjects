/*
The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 


From: 
https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/javascript

Hint: map through array checking if indexof == lastindexof and return the appropriate character
*/

function stringConvert(string,valid){
  str=string.toLowerCase().split('')
  console.log(str)
  let count = 0
let strMap = str.map((e,i) => {
    console.log(e)
    str.forEach(element => {if(e===element){count++}
    console.log(element)
    });
  return (count===1)?"(":")"
  })
  let strSym=strMap.join()
  console.log(strSym)
  console.log(str.join())

  return console.log((strSym===valid)?true:false)

}

console.log( stringConvert("din" , "(((") )
//console.log( stringConvert("recede" , "()()()") )
//console.log( stringConvert("Success" , ")())())") )
//console.log( stringConvert("(( @" , "))((") )