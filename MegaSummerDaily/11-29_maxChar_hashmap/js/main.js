/*
Given a string of characters, return the character that appears the most often.

describe("Max Character", () => {
 it("Should return max character", () => {
  assert.equal(max("Hello World!"), "l");
 });
});

No String or Array Methods (well brute force it first, but then no methods)! 


Hint: Use the "hash map" pattern from previous questions aka put each character in an object with its count and then find the highest by looping through

From: https://medium.com/siliconwat/algorithms-in-javascript-b0bed68f4038

*/
// using a hash map 
    function max(car){
        let letterObject = {}
        let count = 0
        let maxChar = null

    for( const e of car){
            letterObject[e] = letterObject[e] + 1 || 1
        }

    for(const e in letterObject) // a for in loop to loop through objects
    if(letterObject[e]>count){
        count = letterObject[e]
        maxChar = e
    }
    
    console.log(letterObject)
    return(maxChar)
}

    console.log(max("Hello World!"), "solution = l")
    