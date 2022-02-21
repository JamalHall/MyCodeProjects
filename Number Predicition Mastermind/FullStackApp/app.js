
let arr=[1,2,3,4]

const first = () => {
    arr.push(5,6,7)
    console.log('first',arr)
    
 }

 const second = () => {
    arr.splice(3)
    console.log('second',arr)
  
 }

 const third = () => {
    arr.push('a','b','c')
    console.log('third',arr)
    return arr
 }

 third(second(first()))