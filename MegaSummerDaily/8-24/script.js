// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
// https://leetcode.com/problems/contains-duplicate/

// Example 1:
Input: nums1 = [1,2,3,1]
Output: true
// Example 2:
Input: nums2 = [1,2,3,4]
Output: false
// Example 3:
Input: nums3 = [1,1,1,3,3,4,3,2,4,2]
Output: true



input: nums = [1,2,3,1]
output: true

function containDuplicate(arr){
  let map = {}
  for(let i = 0; i < arr.length; i++){
    map[arr[i]] = map[arr[i]] + 1 || 1
    
    if(map[arr[i]] > 1){
      console.log(true) 
      return true
       }
  }
  console.log(false)
  return false
}

containDuplicate(nums1)