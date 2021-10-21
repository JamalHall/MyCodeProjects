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
  let strSym = []
  for(e of str){
    find(str,e)
    function find(str, e){
      let count =0
      console.log( str.filter(element => { return element.indexOf(e) != -1}) )
      count = str.filter(element => { return element.indexOf(e) != -1}).length
      x = (count>1)?')':'('
      strSym.push(x)  
    }
  }
  strSym = strSym.join('')
  console.log(strSym)
  console.log((strSym===valid)?true:false)
  return strSym
}

console.log( stringConvert("din" , "(((") )
console.log( stringConvert("recede" , "()()()") )
console.log( stringConvert("Success" , ")())())") )
console.log( stringConvert("(( @" , "))((") )