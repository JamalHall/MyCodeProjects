/*
Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
*/

var moveZeros = function (arr) {
if(Array.isArray(arr)===true){ 
return arr.filter(e => e!==0).concat(arr.filter(e=> e===0))
}else {
  arr = arr.split(',')
  return arr.filter(e => e!==0).concat(arr.filter(e=> e===0))
}
}
console.log(moveZeros([false,1,0,1,2,0,1,3,"a"]),' returns[false,1,1,2,1,3,"a",0,0]' )
console.log(moveZeros( "1,2,1,1,3,10,0,0,0"),'returns[1,2,1,1,3,1,0,0,0,0]')