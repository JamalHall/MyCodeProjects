

//Final version
// my solution

let oArray = [1,2,3,4,5,6,7,8]
let nArray = []
for (i of oArray){
    let countRange = oArray.length -i
    nArray.push(oArray[countRange])
  countRange--
  }
console.log(nArray)



//100 Devs Solution
function revArr(){
  for(let i=0; i<Array.length/2; i++){
    const temp = arr[i]
    arr[i] = arr[arr.length-1-i]
    arr[arr.length -1 -i] = temp
  }
    return array
  }







