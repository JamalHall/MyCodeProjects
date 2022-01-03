document.querySelector('button').addEventListener('click',flip)
load()

//on load function
async function load(){
    try{
        const response = await fetch('http://localhost:8000/api/')
        const data = await response.json()
        console.log(data)
        objectURL = data        
        document.getElementById("image").setAttribute("src",objectURL)        
    }
    catch(err) {console.log(err)}
    }


async function flip(){
    try{
        const response = await fetch('http://localhost:8000/coin/')
        const data = await response.json()
        console.log(data)
        objectURL = data
        document.getElementById("image").setAttribute("src",objectURL)
    }
    catch(err) {console.log(err)}
    }

  