/*
This question is setting us up for a more complicated question on Monday! 

Your task is to remove all consecutive duplicate words from a string, leaving only first words entries. For example:

"alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"

--> "alpha beta gamma delta alpha beta gamma delta"


Hint: filter values that don't equal the next value

From: 
https://www.codewars.com/kata/5b39e91ee7a2c103300018b3/


*/

const removeConsecutiveDuplicates = s => s.split(' ').filter((e,i,a) => e!==a[i+1]).join(' ')
 

// const removeConsecutiveDuplicates = s =>Array.from(new Set(s.split(' '))).join(' ')


// function words(list){ 
// let splitArr = list.split(' ')    
// let removed = new Set(splitArr)
// removed = Array.from(removed).join(' ')
// return removed
//  }

console.log(removeConsecutiveDuplicates("alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta",`=> "alpha beta gamma delta alpha beta gamma delta" `))
 
