const express = require('express')
const router = express.Router()

const todoController = require('../controller/todoController')


router.get('/', todoController.home)

router.post('/createTodo', todoController.createTodo)
router.post('/updateTodo/:id', todoController.updateTodo)
router.get('/delete/:id', todoController.deleteTodo)

// patch = update

module.exports = router