//const content = document.querySelector('.content');
//document.querySelector('input').addEventListener('change',previewFile)
//document.querySelector('button').addEventListener('click',randomAndSearch)


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
 
  //content.innerText = data        
  let arr1=data.split(/\r\n|\n/).filter(e=>e!='')
  let arr2=arr1.map(e => e=e.replace('$',',$') )
  let arr3=arr2.map(e=>e.split(','))
  viewParse=arr3 
  date=arr3.map(e =>new Date(e[0].split(' ')).toDateString())
  winningNums=arr3.map(e =>e[1])
  allNumbers=winningNums.join(' ').split(' ').filter(e=>e!='')
  prize=arr3.map(e =>e[2])  
}
    
    
    
    
    
    // this will then display a text file in the DOM //
    
    //document.querySelector('.content').innerText = ' [ ' + smartPick.sort((a,b)=>a-b)+' ] ' + content.innerText
    //console.log('Smart pick length',smartPick.length) 


    // {smartPick: data, newDate: date, authStatus: req.oidc.isAuthenticated(), user: req.oidc.user,})