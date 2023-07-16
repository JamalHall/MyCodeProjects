function disemvowel(str) {


//  // this one did not work 

// let splitString=str.split('')
// let vowelString = 'aeiouAEIOU'

// splitString.forEach((e,i) => {
// let test=vowelString.includes(e)
//    if(test===true){
//    splitString.splice(i,1)
//     } 
// })
// let returnedString=splitString.join('') 
// console.log(returnedString) 
// return returnedString



//  // this is the other solution that worked

let newArray = str.split('') 
let filterOut = "aeiouAEIOU".split('')
let filteredArray = newArray.filter((e,i) => {return false === filterOut.includes(e)})
filteredString=filteredArray.join('')
console.log(filteredString)
return filteredString


//  // this is the smooth refactored one

// let removedy = str.replace(/[aeiouAEIOU]/gi,'')
// console.log(removedy)
// return removedy
  
 }
disemvowel("No offense but,\nYour writing is among the worst I've ever read")