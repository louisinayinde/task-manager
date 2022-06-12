const asyncWrapper = require('../middleware/async')
const {createCustomError} = require('../errors/customError')
const Todo = require('../models/Todo')

// GET ALL TODOS
const getAllTodos = asyncWrapper (async (req, res) => {
    const todos = await Todo.find({})
    res.status(200).json({todos, value:todos.length})
    //status 200 = success
})


// CREATE ONE TODO
const createTodo = asyncWrapper (async (req, res) => {
    const todo = await Todo.create(req.body)
    res.status(200).json({todo})
})


// GET ONE TODO
const getTodo = asyncWrapper (async (req, res, next) => {
    const {id: todoID} = req.params
    const todo = await Todo.findOne({_id: todoID})

    // if id doesn't match any todo
    if(!todo){
        return next(createCustomError(`No todo with id : ${todoID}`, 404))
        // 404 = not found
    }
    res.status(200).json({ todo})
})


// DELETE ONE TODOS
const deleteTodo = asyncWrapper( async (req, res) => {
    const {id: todoID} = req.params
    const todo = await Todo.findOneAndDelete({_id: todoID})
    if(!todo){
        return next(createCustomError(`No todo with id : ${todoID}`, 404))
    }
    res.status(200).json({todo})

})


// UPDATE A TODO
const updateTodo = asyncWrapper( async (req, res) => {
    const {id:todoID} = req.params
    const todo = await Todo.findOneAndUpdate({_id: todoID}, req.body, {
        new: true, 
        runValidators: true,
    })
    if(!todo){
        return next(createCustomError(`No todo with id : ${todoID}`, 404))
    }
})

module.exports = {
    getAllTodos,
    createTodo,
    getTodo,
    updateTodo,
    deleteTodo
}