const express = require('express')
const res = require('express/lib/response')
const router = express.Router()

const todoController = require('../controller/todoController')


router.get('/', todoController.home)
//router.get('/editForm', todoController.editForm)
// router.get('/', todoController.getAllTodos)
router.post('/createTodo', todoController.createTodo)

// router.get('/:id', todoController.getTodo)
// router.get('/:id', todoController.updateTodo)
router.get('/delete/:id', todoController.deleteTodo)

// patch = update

module.exports = router