const express = require('express')
const router = express.Router()
const mastermindController = require('../controllers/masterMindCont')


router.get('/', mastermindController.getNums)


module.exports = router

