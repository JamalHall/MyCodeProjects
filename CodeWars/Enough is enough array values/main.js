
//  // [20,37,21])
// deleteNth([1,1,3,3,7,2,2,2,2], 3) 
//   //[1, 1, 3, 3, 7, 2, 2, 2])

function deleteNth(arr,n){ 
    let newArr = [];
for (let i = 0; i < arr.length; i++) {
      if ( dupCount(arr[i]) < n ) {  //recursive call to the dupCount function
        newArr.push(arr[i])
      }
    }
    
    function dupCount(item) {
      let count = 0      
      for (let i = 0; i < newArr.length; i++) {
        if (item === newArr[i]) {
          count++
        }
      }
      return count
    }
  return console.log(newArr)
    
  } 

  deleteNth([20,37,20,21], 1)





//  let countArray = arr
//   let memoryMap = arr
//   let arrOfArr = []

//   for(let i=0; i<arr.length-1; i++){ 
//    let element = memoryMap[i]
//    let ecount = countArray.filter((e,i) => e===element).length
//    console.log(element)
//    console.log(ecount)
//    arrOfArr.push([element,ecount])
       
//   }
//   console.log(arrOfArr)