// my solution

document.querySelector('#btn').addEventListener('click',strRev)

let newStr = ""
let arr1 = []
function strRev() {
  let str=document.querySelector('#input').value
  let length = str.length  
  for(let i=0; i<length; i++){ 
  arr1.unshift(str.charAt(i))       
    } 
    newStr = arr1.join("") 
    document.querySelector('#result').innerText = newStr    
}



