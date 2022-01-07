const PORT = process.env.PORT || 8000
const express = require('express')
const app = express()
const MongoClient = require('mongodb').MongoClient
require('dotenv').config()

////EJS Setup////
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

////DB connection////
let db,
    dbConnectionStr = process.env.DB_STRING,
    dbName = 'todoList'

MongoClient.connect(dbConnectionStr, { useUnifiedTopology: true })
    .then(client => {
        console.log(`Connected to ${dbName} Database`)
        db = client.db(dbName)
    })
        
        
//// Listen method ////
app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
        })


////POST////
        app.post('/updateList', (request, response) => {
            db.collection('listItems').insertOne(request.body)
            .then(result => {
                console.log('Task Added')
                response.redirect('/')
            })
            .catch(error => console.error(error))
        })
    



////GET////
        app.get('/',(request, response)=>{
            db.collection('listItems').find().sort({date: -1}).toArray()
            .then(data => {
             console.log(data)
                response.render('index.ejs', { info: data })
    // data from the render is passed into info variable (you can use any word)
     
            })
            .catch(error => console.error(error))
        })  
    
////PUT////



////DELETE////
app.delete('/deleteTask', (request, response) => {
    db.collection('listItems').deleteOne({taskItem: request.body.taskD}) 
    console.log(request.body)
    .then(result => {
        console.log('Task Deleted')
        response.json('Task Deleted')
    })
    .catch(error => console.error(error))

})