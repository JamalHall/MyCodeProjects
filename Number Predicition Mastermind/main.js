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
let weights = {}
let minMaxWeight 
let numArrDyno =[] // dynamic for searching by number or weights
let objForSelector={}
let sortedArrSelect=[]


document.querySelector('button').addEventListener('click',randomAndSearch)



function previewFile () {

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
  for(e of seperated) { objArr.push( {date: new Date(e[0]), seperated:e[1].split(' ')} ) } 
 
  // this will then display a text file in the DOM //
   //content.innerText = reader.result;
  calculate()
    
});
reader.readAsText(file)  
}//end preview file



//creating a frequency table
function calculate() {
  
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

    for(e in hash){ percentAll[e]= hash[e]/allNumbers.length }

    for(e in percentAll){ weights[e] = (percentAll[e]*10000)+2 }

  let tempArr = []
    for(e in weights){ tempArr.push(weights[e])}
  
  minMaxWeight = { min:tempArr[0], max:tempArr[38] }

//creating selector tables
  let rangeS=9999
  for(e in weights){
    numArrDyno.push(e,weights[e], Math.round(rangeS+1), Math.round(weights[e]+rangeS))
    sortedArrSelect.push(Math.round(rangeS+1), Math.round(weights[e]+rangeS))
    rangeS=weights[e]+rangeS
   }
//selector table as obj for readability
  numArrDyno.forEach((e,i) => { objForSelector[i+1] = e })
  
  //console.log('percent all', percentAll)
  //console.log('weight for each', weights )
  //console.log('Dynamic Array of values',numArrDyno)
  //console.log('selector builder', objForSelector)
  //console.log('Selector Weights Sorted', sortedArrSelect)

  randomAndSearch(numArrDyno)

}// end calculate


function randomAndSearch(){
if(numArrDyno.length==0) return ;
const min = numArrDyno[2]
const max = numArrDyno[155]
let smartPick = []

for(let i=0;i<5;){
const ranPick = Math.floor(Math.random()*(max-min+1)+min)

console.log('min & max & random number',min,max,ranPick)
if(ranPick>=min && ranPick<=max) {console.log(true)} else console.log(false)

let diffCurrent=10000
let nearest
let selectedNum

for(e of sortedArrSelect){
  let diff=Math.abs(e-ranPick)
   if(diff<diffCurrent){diffCurrent=diff; nearest=e} 
   
   if(numArrDyno[numArrDyno.indexOf(nearest)-3]<=39){
     selectedNum=numArrDyno[numArrDyno.indexOf(nearest)-3]
   }else{
     selectedNum=numArrDyno[numArrDyno.indexOf(nearest)-2]
}
}
console.log(diffCurrent,nearest,selectedNum)

if(smartPick.includes(selectedNum)) {
  smartPick.pop(selectedNum)
  i--
} else { 
  smartPick.push(selectedNum)
  i++
}

}
 // this will then display a text file in the DOM //
 document.querySelector('.content').innerText = smartPick.sort((a,b)=>a-b)
 console.log(smartPick.length)

}









