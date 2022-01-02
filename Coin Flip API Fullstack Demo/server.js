const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

app.listen(PORT,()=>{
    console.log(`Server running on ${PORT}`)
})

app.get('/',(request,response)=>{
    response.sendFile(coin.load.imageUrl)
})

app.get('/coin',(request,response)=>{
    response.sendFile(resFile())
})

const resFile = ()=>{
    x = Math.floor(Math.random()*2)
    console.log(x)
        if(x==0){
            return coin.heads.imageUrl
        }else {
            return coin.tails.imageUrl
            }
        }
let coin =  {
    'load':{
        'msg': 'gif',
        'imageUrl': `${__dirname + '/images/Ilp.gif'}` , 
    },

    'heads':{
        'msg': 'heads',
        'imageUrl': `${__dirname + '/images/heads.png'}`  , 
    },

    'tails':{
        'msg': 'tails',
        'imageUrl': `${__dirname + '/images/tails.png'}`  ,
    },
}