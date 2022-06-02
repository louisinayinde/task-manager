const Todo = require('../models/Todo')

// GET ALL TODOS
const getAllTodos = async (req, res) => {
    try {
        const todos = await Todo.find({})
        res.status(200).json({todos})
        //status 200 = success
    } catch (error) {
        res.status(500).json({msg: error})
    }
}


// CREATE ONE TODO
const createTodo = async (req, res) => {
    try {
    const todo = await Todo.create(req.body)
    res.status(200).json({todo})
    } catch (error) {
        res.status(500).json({msg: error})
    }
}


// GET ONE TODO
const getTodo = async (req, res) => {
    try {
        const {id: todoID} = req.params
        const todo = await Todo.findOne({_id: todoID})

        // if id doesn't match any todo
        if(!todo){
            return res.status(404).json({msg: `No todo with id : ${todoID}`})
            // 404 = not found
            // IMPORTANT, put return
        }
        res.status(200).json({ todo})

    } catch (error) {
        res.status(500).json({msg: error})
    }
}

const updateTodo = (req, res) => {
    res.send('update tasks')
}


// DELETE ONE TODOS
const deleteTodo = async (req, res) => {
    try {
        const {id: todoID} = req.params
        const todo = await Todo.findOneAndDelete({_id: todoID})
        if(!todo){
            return res.status(404).json({msg: `No todo with id : ${todoID}`})
        }
        res.status(200).json({todo})
    } catch (error) {
        res.status(500).json({msg: error})
    }
}

module.exports = {
    getAllTodos,
    createTodo,
    getTodo,
    updateTodo,
    deleteTodo
}