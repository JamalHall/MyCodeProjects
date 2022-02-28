const historyData = require('../models/DB-Model')
const moment = require('moment')
 
module.exports={

    getNums: async (req,res)=>{
            try{ 
                const arrayDocs = await historyData.find({})
                const date = moment(todoItems.date).format("MMM Do YY")
                                
                console.log('get ran')                
                res.render('masterMindPage.ejs',  {years: yearDocs, dataArr: arrayDocs, newDate: date, authStatus: req.oidc.isAuthenticated(), user: req.oidc.user,})
            }catch(err){ console.error(err)}
        },
    
}


