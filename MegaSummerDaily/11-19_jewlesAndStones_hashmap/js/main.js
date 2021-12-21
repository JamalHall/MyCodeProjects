/*
This one is tough, but we will see it two days in a row!

You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

Letters are case sensitive, so "a" is considered a different type of stone from "A".

Example 1:

Input: jewels = "aA", stones = "aAAbbbb"
Output: 3

Example 2:

Input: jewels = "z", stones = "ZZ"
Output: 0
 

Constraints:

1 <= jewels.length, stones.length <= 50
jewels and stones consist of only English letters.
All the characters of jewels are unique.


Hint:  HASH MAP PATTERN!

From: https://leetcode.com/problems/jewels-and-stones/

*/

//first solution I came up with using object
function jewelsAndStones(jewels,stones) { 
let ob = {}
let jArr = jewels.split('')
let sArr = stones.split('')
for(e of jArr){
let count = sArr.filter(element=>e===element).length
ob[e]=count
}
return Object.values(ob).reduce((a,b)=>a+b)
}
console.log(jewelsAndStones('aA','aAAbbbb' ), '=> 3')
console.log(jewelsAndStones('z','ZZ' ), '=> 0')
console.log(jewelsAndStones('abc','abbccdd' ), '=> 5')


//solution trying to use Map
function jewelsAndStones2(jewels,stones) { 
    const ob = new Map()
    let jArr = jewels.split('')
    let sArr = stones.split('')
    for(e of jArr){
    let count = sArr.filter(element=>e===element).length
    ob.set(e,count)
    }
    return Array.from(ob.values()).reduce((a,b)=>a+b)
    }
    console.log(jewelsAndStones2('aA','aAAbbbb' ), '=> 3')
    console.log(jewelsAndStones2('z','ZZ' ), '=> 0')
    console.log(jewelsAndStones2('abc','abbccdd' ), '=> 5')
    
    
    //brute force solution
    function findJewels(jewels,stones) { 
    let count =0
    for(j of jewels){
        for(s of stones){
            if(j === s){
                count++
             }
            }
        }
        return count
    }

    console.log(findJewels('aA','aAAbbbb' ), '=> 3')
    console.log(findJewels('z','ZZ' ), '=> 0')
    console.log(findJewels('abc','abbccdd' ), '=> 5')


    // Leon's Solution from class
    function findJewels2(jewels,stones){
        let count=0
            map = {}
        for(const jewel of jewels){
            map[jewel] = true
        }
        for(const stone of stones){
            if(map[stone]){
                count++
            }
        }
        console.log(map)
        return count
    }

    console.log(findJewels2('aA','aAAbbbb' ), '=> 3')
    console.log(findJewels2('z','ZZ' ), '=> 0')
    console.log(findJewels2('abc','abbccdd' ), '=> 5')