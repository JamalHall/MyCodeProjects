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
let mySet = new Set()
function solve(e){       
    mySet.add(e)
    console.log(mySet)
    //const iterator1 = mySet.values();
 
for(let i of mySet.values().next().value){
       let count = i.length
    console.log(i[0])
    console.log(count)
    


    
//     if(e.length>2){
//         console.log(e[i,i,i])
// }
    }
    
}





console.log(solve([[1,2],[4],[5,6]]),"solution 4")
//console.log(solve([[1,2],[4,4],[5,6,6]]),4)
//console.log(solve([[1,2],[3,4],[5,6]]),8)
//console.log(solve([[1,2,3],[3,4,6,6,7],[8,9,10,12,5,6]]),72)