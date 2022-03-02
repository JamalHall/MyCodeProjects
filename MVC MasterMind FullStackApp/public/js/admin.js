document.querySelector('input').addEventListener('change',previewFile)
document.querySelector('#generate').addEventListener('click',smartPick)

const content = document.querySelector('.content');
const DBvars = document.querySelector('.test').innerText
   
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
  viewParse=arr3.map(e=>e) 

serverUpdate(arr3)
}    
  const serverUpdate = async (data) =>{
      console.log(data)
      const options = {
        headers: {'Content-Type': 'application/json'},
        method: "POST",
        body: JSON.stringify(data)
        }
      const response = await fetch("/admin/uploadData",options)
      const getBack = await response.json()
      console.log(getBack)
      location.reload()
    }   
    
   
async function smartPick (){       
        const options = {
          headers: {'Content-Type': 'application/json'},
          method: "GET"          
          }
        const response = await fetch("/admin/nums",options)
        const getBack = await response.json()

      document.querySelector('.content').innerText =  content.innerText + '\n [ ' + getBack+' ] ' 
       console.log(getBack)
        //location.reload()
      }   
