const historyData = require('../models/DB-Model')
const moment = require('moment')
const date = new Date() //moment(todoItems.date).format("MMM Do YY")
const mastermindProcess = require('../dataProcessing/dataProcess')



module.exports = {

    getData: async (req,res)=>{
        try{ 
            const arrayDocs = await historyData.find({})
            const yearDocs = await historyData.find({})                             
            console.log('get ran')                
            res.render('adminPage.ejs',  {years: yearDocs, dataArr: arrayDocs, newDate: date, authStatus: req.oidc.isAuthenticated(), user: req.oidc.user,})
        }catch(err){ console.error(err)}
    },

    createData: async (req,res)=>{
        console.log(req.body)
        try{ 
            //const data = mastermindProcess.previewFile
            await historyData.create(req.body)
       

            console.log('created Main DB entries')
            console.log('works')
            res.json('hi')

        }catch(err){ console.error(err)}
    },

    getNums: async (req,res)=>{
        try{ 
            const arrayDocs = await historyData.find({})           
            const data=mastermindProcess.parseFile(arrayDocs)                
            console.log('get ran')                
            res.render('masterMindPage.ejs',  {smartPick: data, newDate: date, authStatus: req.oidc.isAuthenticated(), user: req.oidc.user,})
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

// createTodo: async (req,res)=>{
//     console.log(req.body)
//     try{
//         //console.log('createTodo')
//         await todoMod.create({user: req.oidc.user.sub, task: req.body.todoFormItem, date: req.body.formDate, complete: false})
//         console.log('Todo has been added!',req.body)
//         res.redirect('/todos')
//     }catch(err){ console.error(err)}
// },