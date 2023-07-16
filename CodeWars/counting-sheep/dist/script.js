let array1 = [true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]

function countSheeps(arrayOfSheep) {
let count =0
arrayOfSheep.forEach((e,i) => {if(e === true) {count=count+1}},0)
  return count
}

console.log(countSheeps(array1))