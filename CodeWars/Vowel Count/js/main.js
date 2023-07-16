/*
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.

*/

function getCount(str) {
    str = str.split('')
      let obj = {
      a : 0,
      e : 1,
      i : 2,
      o : 3,
      u : 4
    }
      let vowles = Object.keys(obj)
  let count = 0
    for(let i=0; i<str.length;i++){
      vowles.includes(str[i])?count++:0
    }
    return count 
  }