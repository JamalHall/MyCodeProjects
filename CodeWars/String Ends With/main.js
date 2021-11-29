
function solution(str, ending){
    
  let str1 = str.slice(-(ending.length))
  console.log(str1)
  console.log(ending)
  if (str1===ending || ending === ""){
    console.log(true)
    return true
    
  } else{ 
    console.log(false)
    return false
  }
   
}
//solution('abcde', 'cde') // true
solution('abcde', 'abc')  // false


