/*
Given a magazine of words and a ransom note, determine if it’s possible to “cut out” and create the ransom note from the magazine words.

const magazine =
 "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";

describe("Ransom Note", () => {
 it("Should return true", () => {
  assert.equal(ransomNote("sit ad est sint", magazine), true);
 });

it("Should return false", () => {
  assert.equal(ransomNote("sit ad est love", magazine), false);
 });

it("Should return true", () => {
  assert.equal(ransomNote("sit ad est sint in in", magazine), true);
 });

it("Should return false", () => {
  assert.equal(ransomNote("sit ad est sint in in in in", magazine), false);
 });
});


Hint: Take a deep breath, you have seen how to solve this brute force and optimally. Either brute force checking every magazine word against every ransom word OR create an object holding all the magazine words and check each ransom word against this object 

From: https://medium.com/siliconwat/algorithms-in-javascript-b0bed68f4038


*/
// using hash map force
const magazine =
 "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"

// hash map
function ransomNote(note,magazine){
let magazineHash = {}
const noteWords = note.split(' ')
const magazineArr = magazine.split(' ')
let possible = true // the default is true waiting on a condition to change to false

for (word of magazineArr){
  magazineHash[word] = magazineHash[word]  +1 || 1
}
  
for (word of noteWords){
  if(magazineHash[word]){
    magazineHash[word]--
    if(magazineHash[word] < 0) possible = false // change condition if it has the word but was not enough
  } else {
     possible = false // change condition if the word is not in the hash
  }
}
console.log(magazineHash)
return possible
}

console.log(ransomNote("sit ad est sint", magazine), true)
console.log(ransomNote("sit ad est love", magazine), false)
console.log(ransomNote("sit ad est sint in in", magazine), true)
console.log(ransomNote("sit ad est sint in in in in", magazine), false)


 //brute force not working 
//   function ransomNote(note,words){
//     let tracker = []
//     note = note.split(' ')
//     words = words.split(' ')
//     for(n of note){
//       for(w of words){
//        // console.log(n , w)
//         if(n===w){
//           tracker.push(n)
//           tracker.splice(tracker.indexOf('sit'),1)
//         }
//       }
//     }
    
//     console.log(tracker)
//     return tracker.length==note.length ? true : false

// }





