/*
The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// should be 6: [4, -1, 2, 1]
Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.

Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.

A subarray is an array that can be made with contiguous elements only https://www.youtube.com/watch?v=86CQq3pKSUw 

*/

var maxSequence = function(arr){
let accMax = 0
let cvMax = 0
for(let i = 0 ; i<arr.length; i++ ){ 
accMax = Math.max(arr[i],accMax+arr[i])
cvMax = Math.max(accMax,cvMax)
}
return Math.max(accMax,cvMax)
  }
 console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]), 'should be 6: [4, -1, 2, 1]')
 
/* my first approach

 var maxSequence = function(arr){
 let sums = arr.map((e,index,a)=>e+a.slice(index+1,a.length).reduce((acc,cv)=>acc+cv,0))
     let sums2 = arr.reverse().map((e,index,a)=>e+a.slice(index+1,a.length).reduce((acc,cv)=>acc+cv,0))
    console.log(sums)
    console.log(sums2)
    let maxarr=[]
    for(let i=0; i<arr.length;i++){
        maxarr.push((sums[i]+sums2[i]))
    }
    return (maxarr.length==0)?0:Math.max(...maxarr)
}


*/

/* code wars solution that was like my first approach 

var maxSequence = function(arr){
      var max = 0;
      for (var i = 0; i < arr.length; i++) {
        for (var j = arr.length; j > i; j--) {
          var total = arr.slice(i,j).reduce(function(a, b){ return a + b; });
          if (max < total) max = total
        }
      }
      return max;
    }

    */
