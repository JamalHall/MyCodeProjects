/*
You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

Examples
[7, 1]  =>  [1, 7]
[5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

sortArray([5, 3, 2, 8, 1, 4]), [1, 3, 2, 8, 5, 4])
sortArray([5, 3, 1, 8, 0]), [1, 3, 5, 8, 0])


Hint: figure out the odd numbers and then map to replace in place

From: https://www.codewars.com/kata/578aa45ee9fd15ff4600090d

*/

function sortArray(array){ 
    console.log('input',array)   
    oddMap = array.filter((e,i) => Math.abs(e)%2===1).sort((a,b)=>a-b)  
  for(e of array){
      if(Math.abs(e)%2===0){
          oddMap.splice(array.indexOf(e),0,e)
      }
    }
  return oddMap 
}
console.log(sortArray([7, 1] ),[1, 7] )
console.log(sortArray([5, 8, 6, 3, 4] ),[3, 8, 6, 5, 4])
console.log(sortArray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]), [1, 8, 3, 6, 5, 4, 7, 2, 9, 0])
console.log(sortArray([5, 3, 2, 8, 1, 4]), [1, 3, 2, 8, 5, 4])

//failed test for my code 
console.log(sortArray([5, 3, 1, 8, 0]), [1, 3, 5, 8, 0])
console.log(sortArray([20, -46, -46, -47, -43,-25, -19, -11,-18, -16,44,  44, -50, -38,9,19]), [20, -46, -47, -43, -25, -19, -11, -18, -16, 44, -50, 44, -46, -38, 9, 19])
console.log(sortArray([1, 111, 11, 11, 2,   1,  5,  0]),[1, 1, 5, 11, 2, 11, 111, 0] )

//Leon's example
// function sortArray(array) {
//  const oddNums = array.filter(n => n % 2 !== 0).sort((a, b) => a - b); 
//  return array.map(n => n % 2 === 0 ? n : oddNums.shift());
// }
