// https://docs.google.com/spreadsheets/d/1_h_3TIoI6amv9p5Fpvsmv6QqA_OnkaeJBb3w3K9-p5M/edit?usp=sharing

let fileValues   // csv as string on new lines in an array
let seperated  // date and nums sorted in array of arrays
let objArr = [] // array of arrays and objects with each num in a index of array
let winArr  // numbers in array
let dates // dates in array in local string

let spreadArr = []
let percentAll = {}
let allNumsHash
let allNumbers = [] // all winning numbers 
let range = {}
let rangeSorted
let minMaxRange 
let x
let y =[] // dynamic for searching by number or range


const previewFile = () => {

    const content = document.querySelector('.content');
    const [file] = document.querySelector('input[type=file]').files;
    const reader = new FileReader(); 
  reader.addEventListener("load", () => {
  
    // assignment of  variables
  fileValues = reader.result.split(/\r\n|\n/).filter(e=>e!='') 
  seperated = fileValues.map(e=>e.split(','))
  winArr = seperated.map(e=>e[1].split(' ') )
  dates = seperated.map(e=>new Date(e[0].split(' ')).toDateString())
  
  // make a sorted object array
  for(e of seperated) { objArr.push( {date: new Date(e[0]), seperated:e[1].split(' ')} ) } //
 
  // this will then display a text file in the DOM //
   content.innerText = reader.result;

    
});

reader.readAsText(file)
  
}



//creating a frequency table
const calculate = () => {
  
  let arr = []
    for(i of winArr){
      arr=[...arr,...i]    
    }
    spreadArr=arr.filter(e=>e!='')

  let hash = {}
    for(i of spreadArr){
      hash[i] = hash[i] +1 || 1
    }

  allNumsHash = hash
  allNumbers = arr.filter(e=>e!='')

    for(e in hash){
      percentAll[e]= hash[e]/allNumbers.length
    }

    for(e in percentAll){
      range[e] = (percentAll[e]*10000)+2
    }

  let tempArr = []
    for(e in range){
      tempArr.push(range[e])

    }
  rangeSorted = tempArr.sort((a,b)=> a-b)
  minMaxRange = {min:tempArr[0], max:tempArr[38]}

  //x = Object.values(range).sort((a,b)=>b-a)
  for(e in range){ y.push(e,range[e])}
  //console.log(y[y.indexOf('11')+1])




}


function key (x) {

  switch (x) {
  case 'a':
    console.log('1');
    break;
    case 'b':
      console.log('2');
      break;
  default: console.log('3')
    break;
}



}














// const arr12=[]
// const promise1 = new Promise((resolve, reject) => {
//   for(i=0;i<=10;i++){ arr12.push(i) }
//   resolve('Success!');
// });

// promise1.then((value) => {
  
//   console.log(value);
//   console.log(arr12.reduce((a,b)=>a+b))
//   // expected output: "Success!"
// });