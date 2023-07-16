/*
Given a string, return a new string that has transformed based on the input:

Change case of every character, ie. lower case to upper case, upper case to lower case.
Reverse the order of words from the input.
Note: You will have to handle multiple spaces, and leading/trailing spaces.

For example:

"Example Input" ==> "iNPUT eXAMPLE"
You may assume the input only contain English alphabet and spaces.


From: https://www.codewars.com/kata/5878520d52628a092f0002d0/


Hint: make an array, map through it making your changes to each letter, and join back into a string

*/

function stringConvert(string){

let str =  string.split(' ').reverse().join(' ').split('')
 
let strArr = str.map((e,i) => {
  if(e === e.toLowerCase()){
    return e.toUpperCase()
  } else if(e === e.toUpperCase()){
    return(e.toLowerCase())
  }else return e
})
 console.log(strArr)
  return strArr.join('')
}

console.log( stringConvert("Example Input") ,'Expected =>  iNPUT eXAMPLE')
