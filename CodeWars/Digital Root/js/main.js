/*
Digital root is the recursive sum of all the digits in a number.

Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

Examples
    16  -->  1 + 6 = 7
   942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2
*/
//refactored
function digital_root(n) {
    const root = n.toString().split('').reduce((acc,cv)=> +acc + +cv)        
        if(root < 10){ return root }      
        return digital_root(root)  // calling the function recursively without a return means you don't hang on to the value you want
        }


//   function digital_root(n) {
//     const root = n.toString().split('').reduce((acc,cv)=> +acc + +cv)        
//     const numSize = root.toString().split('').length
//         console.log('root ',root)
//         console.log('size ',numSize)
//     if(numSize === 1){ return root }      
//         return digital_root(root)  // calling the function recursively without a return means you don't hang on to the value you want
//         }

  console.log(digital_root(16),'= 7')
  console.log(digital_root(942),'= 6')
  console.log(digital_root(132189),'= 6')
  console.log(digital_root(493193),'= 2')

