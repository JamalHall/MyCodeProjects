/*
Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number.

assert.strictEqual(sumMix([9, 3, '7', '3']), 22);
assert.strictEqual(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 42); 
assert.strictEqual(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']), 41); 

From: https://www.codewars.com/kata/57eaeb9578748ff92a000009

Hint: You can convert strings to nums inside of your reduce

*/

function convertAndReduce(numsArray){
map1 = numsArray.map((e,i) => {return parseInt(e)})
return map1.reduce((acc,cv) => acc+cv)
}

stringArrayOfNums = ['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']

console.log(convertAndReduce(stringArrayOfNums),41)
console.log(convertAndReduce([9, 3, '7', '3']),22)
console.log(convertAndReduce(['5', '0', 9, 3, 2, 1, '9', 6, 7]),42)
