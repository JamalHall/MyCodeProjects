//server set up variables
const express = require('express')
const connectDB = require('./config/databaseCFG')
const app = express()
const dotenv = require('dotenv')
const PORT = process.env.PORT || 8000

//express configurations
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

//connect environment vars
dotenv.config({path: './config/.env'}) // path is needed because the file is not in the root

//DB connection
connectDB()


//auth0 connection
const { requiresAuth } = require('express-openid-connect');
const {auth} = require('express-openid-connect')
const authConfig = require('./config/authCFG')
app.use(auth(authConfig))

// Set EJS as templating engine
app.set('view engine','ejs')

// router variables
const homeRoute = require('./routes/homeRoute')
const mastermindRoute = require('./routes/mastermindRoute')
const adminRoute = require('./routes/adminRoute')
 

//router routes
app.use('/', homeRoute)
app.use('/mastermind',requiresAuth(),mastermindRoute )
//app.use('/mastermind',mastermindRoute )
app.use('/admin',requiresAuth(),adminRoute )
//app.use('/admin',adminRoute )


//Listen Method 
app.listen(PORT, ()=>{
    console.log(`The Server is running on ${PORT} use ^c to chill server`)
})

 
// use npm start to run nodemon script
