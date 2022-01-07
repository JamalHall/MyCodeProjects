const deleteSym = document.querySelectorAll('.fa-trash')
const completeSym = document.querySelectorAll('.fa-check-square')

Array.from(deleteText).forEach((element)=>{
    element.addEventListener('click', deleteTask)
})

Array.from(completeText).forEach((element)=>{
    element.addEventListener('click', lineOut)
})

////post////
    // being done in the form action no method needed. 


///get////
        //get request are happening on page reload and set to fire after each post, put and delete


////put////


////delete////
async function deleteTask(){
    const taskDel = this.parentNode.childNodes[1].innerText //this represents the span where the delete button is. Then it goes up to the parent of the span the <li>. Then goes to the child node of the <li>. Finally stores its text in taskDel.
    const dateDel = this.parentNode.childNodes[3].innerText
    try{
        const response = await fetch('deleteTask', {
            method: 'delete',
            headers: {'Content-Type': 'application/json'},
           // this is the body that will be sent to server.js if not hard coded
            body: JSON.stringify({  
              'taskD': taskDel,
              'DateD': dateDel
            })
          })
        const data = await response.json()
        console.log(data)
        location.reload() // reloads page triggering a new get request

    }catch(err){
        console.log(err)
    }
}




function lineOut(){
    const taskDel = this.parentNode.childNodes[1].innerText //this represents the span where the delete button is. Then it goes up to the parent of the span the <li>. Then goes to the child node of the <li>. Finally stores its text in taskDel.
    const dateDel = this.parentNode.childNodes[3].innerText
    // css update to cross out text and change to light red
   console.log('task ',taskDel,'date ',dateDel) 


}