
function repeatStr (n, s) {
  let rs =''
  while (n) {
  n--
  rs += s
  } 
  return console.log(rs)
  }
repeatStr(5, 'hello')