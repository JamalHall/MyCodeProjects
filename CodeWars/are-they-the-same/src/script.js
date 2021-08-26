let a1 = [121, 144, 19, 161, 19, 144, 19, 11];
let a2 = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19];
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

comp(a1,a2)
 