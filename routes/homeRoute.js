const router = require('express').Router()

const homeController = require('../controller/homeController')
router.get("/", homeController.home)

module.exports = router