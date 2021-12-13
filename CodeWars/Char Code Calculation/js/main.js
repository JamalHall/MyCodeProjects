/*
Given a string, turn each character into its ASCII character code and join them together to create a number - let's call this number total1:

'ABC' --> 'A' = 65, 'B' = 66, 'C' = 67 --> 656667
Then replace any incidence of the number 7 with the number 1, and call this number 'total2':

total1 = 656667
              ^
total2 = 656661
              ^
Then return the difference between the sum of the digits in total1 and total2:

  (6 + 5 + 6 + 6 + 6 + 7)
- (6 + 5 + 6 + 6 + 6 + 1)
-------------------------
                       6
                    
*/
//refactored
function calc(x){
   let  chCode = ''
for(ch of x){
  const  y = x.charCodeAt(x.indexOf(ch))
     chCode = chCode + y
    }
    total1 = chCode
    console.log(total1)
    total2 = chCode.replace(/7/g,1)
    console.log(total2)
    total1Sum = total1.split('').reduce((acc,cv) => +acc + +cv)
    total2Sum = total2.split('').reduce((acc,cv) => +acc + +cv)    
   return +total1Sum - +total2Sum
}

console.log(calc('ABC'),'=> 6')
console.log(calc('aaaaaddddr'),'=> 30')

