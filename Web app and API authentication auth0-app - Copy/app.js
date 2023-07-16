const express = require('express')
const app = express()
const dotenv = require('dotenv')
app.set('view engine', 'ejs')
const PORT = process.env.PORT || 3000
dotenv.config({path: './config/.env'})

const { auth } = require('express-openid-connect');

const authConfig = require('./config/authCFG.js')
app.use(auth(authConfig))

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())


const indexRoute= require('./routes/route.js')

app.use('/', indexRoute)

app.listen(PORT, () => { 
    console.log(`app.js is running on ${PORT} ^c to stop`)
})

