const express = require('express')
const res = require('express/lib/response')
const router = express.Router()

const todoController = require('../controller/todoController')


router.get('/', todoController.home)
router.get('/completePage', todoController.completePage)
router.get('/itemLeft', todoController.itemLeft)

router.post('/createTodo', todoController.createTodo)
router.post('/updateTodo/:id', todoController.updateTodo)
router.get('/delete/:id', todoController.deleteTodo)

router.get('*', (req, res) => {
    res.redirect('/')
})

// patch = update

module.exports = router