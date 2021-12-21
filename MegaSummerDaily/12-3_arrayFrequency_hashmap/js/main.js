/*
Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

Example 1:

Input: nums = [3,2,3]
Output: 3
Example 2:

Input: nums = [2,2,1,1,1,2,2]
Output: 2



Hint:  HASH MAP PATTERN! and possibly sorting for nlogn 🙂

From: https://leetcode.com/problems/majority-element/


*/
// using hash map force
  function majorityNum(nums){
    let hash = {}
    let save = null
    let value = null
    for(let e of nums){
      if(!hash[e]){
        hash[e] = 1
      } else{ 
       hash[e] = 1+hash[e]
           }
         }
         console.log(hash)
    for(let h in hash){
      if(hash[h]>save){
        save = hash[h]
        value = h        
      }
    }
    return value
}

console.log(majorityNum([3,2,3]), 'result=>3')
console.log(majorityNum([2,2,1,1,1,2,2]), 'result=>2')
console.log(majorityNum([3,3,4]), 'result=>3')



