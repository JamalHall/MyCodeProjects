const express = require('express')
const router = express.Router() 
const adminController = require('../controllers/adminCont')


// router.get('/home',adminController.home)
router.get('/data',adminController.getData)
router.get('/nums',adminController.getNums)
router.post('/uploadData',adminController.createData)
//router.put('/markStatus',todosController.statusTodo)
router.delete('/deleteData',adminController.deleteData)

module.exports = router