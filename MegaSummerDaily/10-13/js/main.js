/*
Return the average of the given array rounded down to its nearest integer.

The array will never be empty.

getAverage([2,2,2,2]),2)
getAverage([1,2,3,4,5,]),3);
getAverage([1,1,1,1,1,1,1,2]),1)

From: https://www.codewars.com/kata/563e320cee5dddcf77000158/javascript

Hint: Reduce the sum and divide by the length to get the average and then round down

*/

function getAverage(numsArray){
        average = numsArray.reduce((acc,cv)=>{
            return (acc+cv)
        },0)
    console.log(`the Average is ${average}`)
    return Math.round(average/numsArray.length)
} 

console.log(getAverage([2,2,2,2]),"expected",2)
console.log(getAverage([1,2,3,4,5,]),"expected",3)
console.log(getAverage([1,1,1,1,1,1,1,2]),"expected",1)
