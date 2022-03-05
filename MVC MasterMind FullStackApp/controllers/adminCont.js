const rc5DataDB = require('../models/DB-Model')
const moment = require('moment')
const date = new Date() //moment(todoItems.date).format("MMM Do YY")
const mastermindProcess = require('../dataProcessing/dataProcess')
const e = require('express')
const { db } = require('../models/DB-Model')
const mProcess = mastermindProcess.mmFunctions


module.exports = {

    getData: async (req,res)=>{
        try{
            let dbResponse
            if(!req.query.startYear||!req.query.endYear){
                 dbResponse = await rc5DataDB.find()
            } else{
                 dbResponse = await rc5DataDB.find({year:{$gte: req.query.startYear}, year: {$lte: req.query.endYear}})
            }            
            let arr=[]

            const dbReply=dbResponse.map(e=>e = e.date) 
            for(let e of dbResponse){arr=[...e.data,...arr]}
            await mProcess.calculate(arr)
            const masterMindSmart = await mProcess.randomAndSearch()
            //console.log(req)
            console.log(req.query)
            console.log('dbresponse',dbReply)
           // console.log(masterMindSmart)                                        
            //res.json(arr)
            res.render('adminPage.ejs',  {authStatus: req.oidc.isAuthenticated(), user: req.oidc.user, mmVars:  JSON.stringify(masterMindSmart) ,dbres: JSON.stringify(dbReply), smartPick: masterMindSmart.smartPick})
        }catch(err){ console.error(err)}
    },

    createData: async (req,res)=>{
        console.log(req.body.year)
        try{ 
            const dataDates = await mProcess.parseData(req.body.data)
            await rc5DataDB.create({uploadDate: date, year: +req.body.year, date: dataDates, data: req.body.data})
            console.log('created Main DB entries')
            console.log('works')
            res.json('create data hi')

        }catch(err){ console.error(err)}
    },

    getNums: async (req,res)=>{
        try{                     
            const masterMindSmart = await mProcess.randomAndSearch()                            
            res.json(masterMindSmart.smartPick)
        }catch(err){ console.error(err)}
    },

    deleteData: async (req,res)=>{
        console.log(req.body)
        const taskName = req.body.taskName
        try{ 
                await todoMod.findOneAndDelete({_id: req.body.todoIdFromMainJSFile})
                console.log(`${taskName} task deleted`)
                res.json(`${taskName} task deleted`)
            }catch(err){ console.error(err)}
        },


}

