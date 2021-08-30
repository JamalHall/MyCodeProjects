
//  // [20,37,21])
// deleteNth([1,1,3,3,7,2,2,2,2], 3) 
//   //[1, 1, 3, 3, 7, 2, 2, 2])

function deleteNth(arr,n){  
  
    let countArray = arr
    let memoryMap = arr
    let arrOfArr = []
  
    for(let i=0; i<arr.length-1; i++){ 
     let element = memoryMap[i]
     let ecount = countArray.filter((e,i) => e===element).length
     console.log(element)
     console.log(ecount)
     arrOfArr.push([element,ecount])
         
    }
    console.log(arrOfArr)
  
  }    
    deleteNth([20,37,20,21], 1)
  
  
   