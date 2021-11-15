/*
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

Note: If the number is a multiple of both 3 and 5, only count it once.

*/

function solution(number){
  let arr = []
  let i = 0
  if(number>0){
  while(i < number){
   i%3==0 && i%5==0? arr.push(i):i%3==0? arr.push(i):i%5==0? arr.push(i):0
    i++
  }
    }else return 0

  return arr.reduce((acc,cv)=>acc+cv)
} 
console.log(solution(10,23), '10 => 3+5+6+9=23' )