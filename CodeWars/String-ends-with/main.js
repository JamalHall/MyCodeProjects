
function solution(str, ending){
    
  str1 = str.slice(-(ending.length))
  console.log(str1)
  console.log(ending)
  if (str1===ending){
    return console.log(true)
  } else{ 
    return console.log(false)
  }
   
}

//solution('abcde', 'cde')
solution('abcde', 'abc')


