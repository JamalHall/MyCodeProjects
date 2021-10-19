/*
Return the number of unique arrays that can be formed by picking exactly one element from each subarray.

For example: solve([[1,2],[4],[5,6]]) = 4, because it results in only 4 possibilities. They are [1,4,5],[1,4,6],[2,4,5],[2,4,6].

Make sure that you don't count duplicates; for example solve([[1,2],[4,4],[5,6,6]]) = 4, since the extra outcomes are just duplicates.

solve([[1,2],[4],[5,6]]),4)
solve([[1,2],[4,4],[5,6,6]]),4)
solve([[1,2],[3,4],[5,6]]),8)
solve([[1,2,3],[3,4,6,6,7],[8,9,10,12,5,6]]),72)



From: https://www.codewars.com/kata/59e66e48fc3c499ec5000103


Hint: You have an array full of arrays. Map through the parent array and make sure each sub array is a set aka no duplicate numbers. Once each sub array contains no duplicates you can just reduce multiplying the length of each sub array together to get the total combinations 
*/
console.log(solve([[1,2],[4],[5,6]]),"solution 4") //   2*1*2 possibilities = 4 if unique
//console.log(solve([[1,2],[4,4],[5,6,6]]),4)
//console.log(solve([[1,2],[3,4],[5,6]]),8)
//console.log(solve([[1,2,3],[3,4,6,6,7],[8,9,10,12,5,6]]),72)

function solve(arr) {
    const noDupes = arr.map(e => e.reduce((acc, curr) => {
      if (!acc.includes(curr)) acc.push(curr)
      console.log(acc)
      console.log(curr)
      return acc;
    }, []));
    return noDupes.reduce((acc, e) => acc * e.length, 1)
  };

//////////////////////////////////////////////////////


//   function solve(arr) {
//     let total = 1
    
//     for(let i = 0; i < arr.length; i++){
//       arr[i] = [...new Set(arr[i])]
//     }
    
//     console.log(arr);
    
//     for(let i = 0; i < arr.length; i++){
//       total = total * arr[i].length;
//     }
      
//   return total;
//   };

///////////////////////////////////////////

// // Leon's solution

// function arrCombinations(arr){
//     return arr.map(s => new Set(s).size).reduce((a,c)=> a*c, 1)
//   }
  
//   console.log(arrCombinations([[1,2],[4],[5,6]]), 4)
//   console.log(arrCombinations([[1,2],[4,4],[5,6,6]]), 4)

//////////////////////////////////////////////////////////////

