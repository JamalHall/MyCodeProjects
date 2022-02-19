let arr1=[1,2,3]
let arr2=[4,5,6]
let merge=[]

document.querySelector('input').addEventListener('change',previewFile)

function previewFile() {
    const content = document.querySelector('.content');
    const [file] = document.querySelector('input[type=file]').files;
    const reader = new FileReader();
   
    reader.addEventListener("load", () => {
        merge=[...arr1,...arr2]
        content.innerText = reader.result
        console.log('first function',merge)
        secondFunction()
    })
    // nothing else runs correctly in this area
        reader.readAsText(file);        
        
  }

function secondFunction(){
    i=7    
    for(i;i<=10;i++){
        merge.push(i)
    }
    console.log('second function',merge)
}


// Ah I see, so you want secondFunction to be ran...after the file is loaded, but you don't want to put it in the load event handler function where you have first function being console logged basically.

// Otherwise, if you want to have secondFunction only run after the load event is finished, then I think you'd have to make your own promise around the load event and await that, or use the file.text() promise which does that for you: 


// const result = await file.text()

// merge=[...arr1,...arr2]
// content.innerText = result
// console.log('first function',merge)
// secondFunction()

// //If you wanted to promise-ify reader though:

// const result = await new Promise(resolve => {
//     reader.addEventListener("load", () => {
//         merge=[...arr1,...arr2]
//         content.innerText = reader.result
//         console.log('first function',merge)
//         resolve(reader.result)
//     })
//     reader.readAsText(file);        
// })
// secondFunction()

// class FileReader{
//     // it's actually much more complex, but all that's unrelated to the basic concept
//     addEventListener(event, callback){
//       this.onLoad = callback
//     }
//     readAsText(file){
//       const text = ''// do the actual reading of the file
//       this.result = text;
//       this.onLoad(this)
//     }
//   }