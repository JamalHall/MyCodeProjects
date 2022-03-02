const historyData = require('../models/DB-Model')
const moment = require('moment')
const date = new Date() //moment(todoItems.date).format("MMM Do YY")
const mastermindProcess = require('../dataProcessing/dataProcess')
const mProcess = mastermindProcess.mmFunctions
const mmVariables = mastermindProcess.mmVariables

module.exports = {

    getData: async (req,res)=>{
        try{ 
            const dbResponse = await historyData.find({})
            const masterMindResponse = await mProcess.calculate(dbResponse[0].data)
            const masterMindSmart = await mProcess.randomAndSearch()                            
            console.log('mm variables =>',masterMindResponse)
            console.log('DB res[0] data =>', dbResponse[0].data)
            console.log('mm smart pick =>',masterMindSmart)                            
            res.render('adminPage.ejs',  {authStatus: req.oidc.isAuthenticated(), user: req.oidc.user, mmVars: masterMindResponse , dbRes: dbResponse, smartPick: masterMindSmart})
        }catch(err){ console.error(err)}
    },

    createData: async (req,res)=>{
        console.log(req.body)
        try{ 
            //const data = mastermindProcess.previewFile
            await historyData.create({uploadDate: date  ,data: req.body})
            console.log('created Main DB entries')
            console.log('works')
            res.json('create data hi')

        }catch(err){ console.error(err)}
    },

    getNums: async (req,res)=>{
        try{                     
            const masterMindSmart = await mProcess.randomAndSearch()                            
            res.json(masterMindSmart)
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