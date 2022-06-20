// const asyncWrapper = require('../middleware/async')
const { createCustomError } = require('../errors/customError')
const Todo = require('../models/Todo')
const date = require('../controller/date')


const home = async (req, res) => {
    try {
        const todos =  await Todo.find({}).sort("completed")
        res.render('pages/home', { day: date.getDate(), todos }) ;
    } catch (error) {
        res.status(400).send(error)
    }
}

const completePage = async (req, res) => {
    try {
        const todos =  await Todo.find({completed : true})
        res.render('pages/completePage', { day: date.getDate(), todos }) ;
    } catch (error) {
        res.status(400).send(error)
    }
}

const itemLeft = async (req, res) => {
    try {
        const todos =  await Todo.find({completed : false})
        res.render('pages/itemLeft', { day: date.getDate(), todos }) ;
    } catch (error) {
        res.status(400).send(error)
    }
}

// CREATE ONE TODO
const createTodo = async (req, res) => {
    try {
        const todo = new Todo({
            ...req.body,
        })
        const todos =  await todo.save() // sauvegarde dans la BD
        .then((t)=>{
            res.redirect('/todo')
        })
    } catch (error) {
        res.status(400).send(error)
    }
    
}

// DELETE ONE TODOS
const deleteTodo = async (req, res) => {
    try {
        const {id: todoID} = req.params
        const todo = await Todo.findOneAndDelete({_id: todoID})
        if(!todo){
            return next(createCustomError(`No todo with id : ${todoID}`, 404))
        }
        res.redirect('/todo')
    } catch (error) {
        res.status(400).send(error)
    }

}


// UPDATE A TODO
const updateTodo =  async (req, res) => {
    if(req.body.completed == undefined) req.body.completed = false
    try {
        const {id:todoID} = req.params
        const todo = await Todo.findByIdAndUpdate(todoID, req.body)
        if(!todo){
            return next(createCustomError(`No todo with id : ${todoID}`, 404))
        }
        res.redirect('/todo')
    } catch (error) {
        res.status(400).send(error)
    }
}



module.exports = {
    home,
    completePage,
    itemLeft,
    createTodo,
    updateTodo,
    deleteTodo
}