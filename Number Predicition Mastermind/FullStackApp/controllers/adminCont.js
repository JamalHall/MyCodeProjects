const historyData = require('../models/DB-Model')
const moment = require('moment')
const date = moment(todoItems.date).format("MMM Do YY")
const mastermindProcess = require('../dataProcessing/dataProcess')



module.exports = {

    getNums: async (req,res)=>{
        try{ 
            const arrayDocs = await historyData.find({})           
            const data=mastermindProcess.parseFile(arrayDocs)                
            console.log('get ran')                
            res.render('masterMindPage.ejs',  {smartPick: data, newDate: date, authStatus: req.oidc.isAuthenticated(), user: req.oidc.user,})
        }catch(err){ console.error(err)}
    },

    getData: async (req,res)=>{
        try{ 
            const arrayDocs = await historyData.find({})           
                            
            console.log('get ran')                
            res.render('masterMindPage.ejs',  {years: yearDocs, dataArr: arrayDocs, newDate: date, authStatus: req.oidc.isAuthenticated(), user: req.oidc.user,})
        }catch(err){ console.error(err)}
    },

    createData: async (req,res)=>{
        console.log(req.body)
        try{ 
            const arrayDocs = await historyData.find({})           
            const data=mastermindProcess.parseFile(arrayDocs)                
            console.log('get ran')                
            res.render('masterMindPage.ejs',  {smartPick: data, newDate: date, authStatus: req.oidc.isAuthenticated(), user: req.oidc.user,})
            console.log('Historic data has been added!',req.body)
            res.redirect('/admin')
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