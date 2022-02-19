
let date
let winningNums
let prize 
let allNumbers
let numArrDyno =[] // dynamic for searching by number or weights
let objForSelector={} //selector table as obj for readability
let dynamicStatRange=[]

const content = document.querySelector('.content');
document.querySelector('input').addEventListener('change',previewFile)
document.querySelector('button').addEventListener('click',randomAndSearch)


function previewFile() {    
    const [file] = document.querySelector('input[type=file]').files;
    const reader = new FileReader();   
    reader.addEventListener("load", () => {         
        console.log('file loaded')
        parseFile(reader.result)         
    })
   reader.readAsText(file);                
  }


function parseFile(data){
 
  content.innerText = data        
  let arr1=data.split(/\r\n|\n/).filter(e=>e!='')
  let arr2=arr1.map(e => e=e.replace('$',',$') )
  let arr3=arr2.map(e=>e.split(','))

  date=arr3.map(e =>new Date(e[0].split(' ')).toDateString())
  winningNums=arr3.map(e =>e[1])
  allNumbers=winningNums.join(' ').split(' ').filter(e=>e!='')
  prize=arr3.map(e =>e[2])
   calculate()
}


function calculate(){
    
    let hash = {}
    for(i of allNumbers){
      hash[i] = hash[i] +1 || 1
    }

let percentAll = {}
let weights = {}

  for(e in hash){ percentAll[e]= hash[e]/allNumbers.length }  
  for(e in percentAll){ weights[e] = (percentAll[e]*10000)+2 }

//creating selector tables
let rangeS=9999

for(e in weights){
  numArrDyno.push(e,weights[e], Math.round(rangeS+1), Math.round(weights[e]+rangeS))
  dynamicStatRange.push(Math.round(rangeS+1), Math.round(weights[e]+rangeS))
  rangeS=weights[e]+rangeS
 }
//selector table as obj for readability
numArrDyno.forEach((e,i) => { objForSelector[i+1] = e })

randomAndSearch()
// console.log(hash,percentAll,weights)
// console.log(minMaxWeight,dynamicStatRange)
}


function randomAndSearch(){
    if(numArrDyno.length==0) return
    const min = numArrDyno[2]
    const max = numArrDyno[155]
    let smartPick = []
    
    for(let i=0;i<5;){
    const ranPick = Math.floor(Math.random()*(max-min+1)+min)
    
    console.log('Min & Max & Random Number',min,max,ranPick)
    if(ranPick>=min && ranPick<=max) {console.log('Random Number in Dyno range',true)} else console.log('Random Number in Dyno range',false)
    
    let diffCurrent=10000
    let nearest
    let selectedNum
    
    for(e of dynamicStatRange){
      let diff=Math.abs(e-ranPick)
       if(diff<diffCurrent){diffCurrent=diff; nearest=e} 
       
       if(numArrDyno[numArrDyno.indexOf(nearest)-3]<=39){
         selectedNum=numArrDyno[numArrDyno.indexOf(nearest)-3]
       }else{
         selectedNum=numArrDyno[numArrDyno.indexOf(nearest)-2]
    }
    }
    //removes duplicates    
    if(smartPick.includes(selectedNum)) {
      smartPick.pop(selectedNum)
      i--
    } else { 
      smartPick.push(selectedNum)
      i++
    }
    console.log('Min difference',diffCurrent,'Nearest Dynamic value',nearest,'Selected Number',+selectedNum)
    }
     // this will then display a text file in the DOM //
     document.querySelector('.content').innerText = smartPick.sort((a,b)=>a-b)
     console.log('Smart pick length',smartPick.length)    
    }