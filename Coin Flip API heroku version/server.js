const express = require('express')
const app = express()
const cors = require('cors')
const PORT = process.env.PORT || 8000

app.use(cors())

app.listen(PORT,()=>{
    console.log(`Server running on ${PORT}`)
})

app.get('/',(request,response)=>{
    console.log('server load')
    response.sendFile(__dirname + '/index.html')
    //response.json(coin['load']['imageUrl'])
})

app.get('/api',(request,response)=>{
    console.log('api req')
    response.json(coin['load']['imageUrl'])
})

app.get('/coin',(request,response)=>{
    response.json(resFile())
})

const resFile = ()=>{
    x = Math.floor(Math.random()*2)
    console.log('flip ',x)
        if(x==0){
            return coin.heads.imageUrl
        }else {
            return coin.tails.imageUrl
            }
        }
let coin =  {
    'load':{
        'msg': 'gif',
        'imageUrl': `https://github.com/JamalHall/MyCodeProjects/blob/445190cf40f4fff4c6b426f65e94e0e067efe16d/Coin%20Flip%20API%20Fullstack%20Demo/images/Ilp.gif?raw=true` ,
        'useEval': 'function test(){alert(2+4)}', 
    },

    'heads':{
        'msg': 'heads',
        'imageUrl': `https://github.com/JamalHall/MyCodeProjects/blob/445190cf40f4fff4c6b426f65e94e0e067efe16d/Coin%20Flip%20API%20Fullstack%20Demo/images/heads.png?raw=true`  , 
    },

    'tails':{
        'msg': 'tails',
        'imageUrl': `https://github.com/JamalHall/MyCodeProjects/blob/445190cf40f4fff4c6b426f65e94e0e067efe16d/Coin%20Flip%20API%20Fullstack%20Demo/images/tails.png?raw=true`  ,
    },
}
