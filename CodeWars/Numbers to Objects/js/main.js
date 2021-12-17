/*
You will be given an array of numbers.

For each number in the array you will need to create an object.

The object key will be the number, as a string. The value will be the corresponding character code, as a string.

Return an array of the resulting objects.

All inputs will be arrays of numbers. All character codes are valid lower case letters. The input array will not be empty.
                    
*/
 // //hash map does not work it makes a single object the return needs to be separate objects

// function numObj(s){
// let hash = {}
// let arr = []
// for(let e of s){
// el = e.toString()   
// hash[el]=String.fromCharCode(e)
// arr.push(hash)
// }
// console.log(hash)
// return arr
// }


// this function makes separate objects by moving the object literal inside of the loop
function numObj(s){
   let arr = [];
   for(let num of s){
     let obj = {};
     obj[num] = String.fromCharCode(num);
     arr.push(obj);
     console.log(obj)
   }
   console.log(arr)
   return arr;
 }

console.log(numObj([118,117,120]),[{'118':'v'}, {'117':'u'}, {'120':'x'}])
console.log(numObj([101,121,110,113,113,103]),[{'101':'e'}, {'121':'y'}, {'110':'n'}, {'113':'q'}, {'113':'q'}, {'103':'g'}])




// function numObj(s){
//    var arr=[]
//    for (var i=0; i<s.length; ++i)
//    {
//      var c={};
//      c[s[i].toString()]=String.fromCharCode(s[i]);
//      arr.push(c);
//    }
//    return arr;
//  }



// function numObj(arr){
//    return arr.map(el => { return { [el]: String.fromCharCode(el) }}
//  )}


//  function numObj(s){
//    return s.map(n => {
//      const obj = {};
//      obj[n] = String.fromCharCode(n);
//      return obj;
//    });
//  }