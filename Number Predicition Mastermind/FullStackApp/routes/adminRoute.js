const express = require('express')
const router = express.Router() 
const adminController = require('../controllers/adminCont')


router.get('/',adminController.useAdmin)
 //router.post('/createTodo', todosController.createTodo)
//router.put('/markStatus',todosController.statusTodo)
//router.delete('/deleteTodo', todosController.deleteTodo)

module.exports = router