/*
Given a list of integers and a single sum value, return the first two values (parse from the left please) in order of appearance that add up to form the sum.

sum_pairs([11, 3, 7, 5],         10)
#              ^--^      3 + 7 = 10
== [3, 7]

sum_pairs([4, 3, 2, 3, 4],         6)
#          ^-----^         4 + 2 = 6, indices: 0, 2 *
#             ^-----^      3 + 3 = 6, indices: 1, 3
#                ^-----^   2 + 4 = 6, indices: 2, 4
#  * entire pair is earlier, and therefore is the correct answer
== [4, 2]

sum_pairs([0, 0, -2, 3], 2)
#  there are no pairs of values that can be added to produce 2.
== None/nil/undefined (Based on the language)

sum_pairs([10, 5, 2, 3, 7, 5],         10)
#              ^-----------^   5 + 5 = 10, indices: 1, 5
#                    ^--^      3 + 7 = 10, indices: 3, 4 *
#  * entire pair is earlier, and therefore is the correct answer
== [3, 7]
Negative numbers and duplicate numbers can and will appear.

*/

function sumPairs(ints, s){ 
     const intsSet = new Set();
    for (let i = 0; i < ints.length; i++) {
      let currInt = ints[i];
      if (intsSet.has(s - currInt)) return [s - currInt, currInt];
      else intsSet.add(currInt);
    }
  }


//console.log(sumPairs([1, 4, 8, 7, 3, 15], 8), "Expected return [1, 7] ")
//console.log(sumPairs([20, -13, 40], -7), " Expected return undefined") 
//console.log(sumPairs([1, -2, 3, 0, -6, 1], -6), "Expected return [0, -6]")
console.log(sumPairs([10, 5, 2, 3, 7, 5], 10), "Expected return [3, 7]")
console.log(sumPairs([1, 2, 3, 4, 1, 0], 2), "Expected return [1, 1]")  
   
//&& element!== ints[count1]


//let arr = []
// ints.forEach(element => {
//   let count1 = 1 + ints.indexOf(element)
//   while(count1<ints.length){ 
  
//     if( element + ints[count1] === s ){
//       arr.push(element)
//       arr.push(ints[count1])    
//     }
//     count1++
    
//   }
//   });
//   console.log(arr)
//   return (arr.length<2)?undefined:arr.slice(0,2)



// let arr = []

// for(let i=0; i<ints.length; i++){
//   ints.forEach(e => {
//    if(ints[i] + e === s){
//       arr.push(ints[i])
//       ints.pop()         
//     }
//   })
    
//   }
   
//   console.log(arr)
//   return (arr.length<2)?undefined:arr.slice(0,2)
//   }