const express = require('express')
const router = express.Router()
const homeController = require('../controllers/homeCont')

router.get('/', homeController.showHome)

module.exports = router