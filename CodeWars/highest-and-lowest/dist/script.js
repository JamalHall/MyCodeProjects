highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"

function comp(array1, array2){
 if (array1 == null || array2 == null) {
   return false
 }else {
  let x = array1.sort((a,b)=>{return a-b})
  let map1 = x.map(x => x*x )
  let y = array2.sort((a,b)=>{return a-b})
  let maths = map1.every((e,i) => {return e===y[i]})
  console.log (maths)
  return maths
 }
    }