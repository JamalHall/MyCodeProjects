/*
An ordered sequence of numbers from 1 to N is given. One number might have deleted from it, then the remaining numbers were mixed. Find the number that was deleted.

Example:

The starting array sequence is [1,2,3,4,5,6,7,8,9]
The mixed array with one deleted number is [3,2,4,6,7,8,1,9]
Your function should return the int 5.
If no number was deleted from the array and no difference with it, your function should return the int 0.

Note: N may be 1 or less (in the latter case, the first array will be []).

findDeletedNumber([1,2,3,4,5], [3,4,1,5]), 2, 'Deletion')
findDeletedNumber([1,2,3,4,5,6,7,8,9], [1,9,7,4,6,2,3,8]), 5, 'Deletion')
findDeletedNumber([1,2,3,4,5,6,7,8,9], [5,7,6,9,4,8,1,2,3]), 0, 'No deletion')


Hint: someArr.indexOf(value) === -1 is a value that does not exist in someArr - throw that in a filter!  OR... think about the math...

From: https://www.codewars.com/kata/595aa94353e43a8746000120

*/

function findDeletedNumber(arr1, arr2){
 let arrA=arr1.reduce((acc,cv) => acc+cv)
 let arrB=arr2.reduce((acc,cv) => acc+cv)
 let diff=Math.abs(arrA-arrB)
 return (diff>0)?`${diff} Deletion`:`${diff} No Deletion`
}
console.log(findDeletedNumber([1,2,3,4,5], [3,4,1,5]), '2 Deletion')
console.log(findDeletedNumber([1,2,3,4,5,6,7,8,9], [1,9,7,4,6,2,3,8]), '5 Deletion')
console.log(findDeletedNumber([1,2,3,4,5,6,7,8,9], [5,7,6,9,4,8,1,2,3]), '0 No deletion') 
