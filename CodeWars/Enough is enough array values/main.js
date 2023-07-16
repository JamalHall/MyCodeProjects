
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

