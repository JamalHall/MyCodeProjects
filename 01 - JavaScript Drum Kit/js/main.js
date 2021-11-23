document.addEventListener('keydown',keyValue)

const allKeys = (document.querySelectorAll('.key')) // will return an array of all keys with the class of key and shows the one pressed if it was placed in a function or variable used in a function
console.log(allKeys) 

allKeys.forEach(e=> e.addEventListener('transitionend',remove))

function keyValue(kv){    
    playing(kv.keyCode)
    style(kv.keyCode)
} 

function playing(pkv){
    const sound = document.querySelector(`audio[data-key="${pkv}"]`)
    console.log(sound)
    if(!sound) return // terminate this function is key is not listed in program
    sound.play(sound)
    sound.currentTime = 0 // sets audio time at zero seconds to allow new instances to play immediately rather than wait until previous is finished
   
}

function style(skv){
    const style = document.querySelector(`div[data-key="${skv}"]`)
    if(!style) return // terminate this function is key is not listed in program
    style.classList.add('playing')    
}

function remove(rkv){
     if(rkv.propertyName !== 'transform') return
     console.log(rkv)
     console.log( rkv.propertyName)
     console.log(this)
     this.classList.remove('playing')  // this is refering to where the remove function was called in this case the e element in the all keys array
     
}

