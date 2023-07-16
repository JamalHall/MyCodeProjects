/*
You are given two lists of closed intervals, firstList and secondList, where firstList[i] = [start i, end i] and secondList[j] = [start j, end j]. Each list of intervals is pairwise disjoint and in sorted order.

Return the intersection of these two interval lists.

A closed interval [a, b] (with a <= b) denotes the set of real numbers x with a <= x <= b.

The intersection of two closed intervals is a set of real numbers that are either empty or represented as a closed interval. For example, the intersection of [1, 3] and [2, 4] is [2, 3].

Example 1:

Input: firstList = [[0,2],[5,10],[13,23],[24,25]], secondList = [[1,5],[8,12],[15,24],[25,26]]
Output: [[1,2],[5,5],[8,10],[15,23],[24,24],[25,25]]
Example 2:

Input: firstList = [[1,3],[5,9]], secondList = []
Output: []
Example 3:

Input: firstList = [], secondList = [[4,8],[10,12]]
Output: []
Example 4:

Input: firstList = [[1,7]], secondList = [[3,10]]
Output: [[3,7]]
 

Constraints:

0 <= firstList.length, secondList.length <= 1000
firstList.length + secondList.length >= 1
0 <= starti < endi <= 109
endi < starti+1
0 <= startj < endj <= 109
endj < startj+1
*/

var intervalIntersection = function(firstList, secondList) {


}

//console.log(intervalIntersection([[1,7]],[[3,10]]),'Output', [[3,7]])

console.log(intervalIntersection([[0,2],[5,10],[13,23],[24,25]], [[1,5],[8,12],[15,24],[25,26]]),'Output', [[1,2],[5,5],[8,10],[15,23],[24,24],[25,25]])

//console.log(intervalIntersection([[1,3],[5,9]],[]),'Output', [])



// var intervalIntersection = function(firstList, secondList) {
//   let out=[]
//   for(eone of firstList){
//     let ione=0 
//     out[ione]=new Array(2)  
//   for(etwo of secondList){
//     let itwo=0
//       let start1 = eone[0]
//       let end1 = eone[1]
//       let start2 = etwo[0]
//       let end2 = etwo[1]
//       console.log(start1,end1)
//       console.log(start2,end2)
//         //[biggest, smallest] use switch case statement and continues
//       if(start1>=start2&&start1<=end2){
//         //out[ione][itwo]=start1
//       } else {
//         //out[ione][itwo]=start2
//       } 
//       ione++
//       itwo++  
//      }
//   console.log(out)
//   }  
  
  
//   return(out)    
  
//   }