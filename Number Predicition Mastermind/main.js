// https://docs.google.com/spreadsheets/d/1_h_3TIoI6amv9p5Fpvsmv6QqA_OnkaeJBb3w3K9-p5M/edit?usp=sharing

let fileValues  
let nums
let objArr=[]

previewFile=()=> {

    const content = document.querySelector('.content');
    const [file] = document.querySelector('input[type=file]').files;
    const reader = new FileReader(); 
  reader.addEventListener("load", () => {
   // assignment of fileValues variable
  fileValues = reader.result.split(/\r\n|\n/) 
  nums=fileValues.map(e=>e.split(','))
  // this will then display a text file in the DOM //
  content.innerText = reader.result;

  // make a sorted object array
  for(e of nums) { objArr.push( {date: new Date(e[0]), nums:e[1].split(' ')} ) }
   
  


});
reader.readAsText(file)
console.log(objArr)





}
  
  
