const express = require('express')
const res = require('express/lib/response')
const router = express.Router()

const { getAllTodos, createTodo, getTodo, updateTodo, deleteTodo } = require('../controller/todoController')

router.route('/').get(getAllTodos).post(createTodo)
router.route('/:id').get(getTodo).patch(updateTodo).delete(deleteTodo)

// patch = update

module.exports = router