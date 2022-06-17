// const asyncWrapper = require('../middleware/async')
const { createCustomError } = require('../errors/customError')
const Todo = require('../models/Todo')
const date = require('../controller/date')


const home = async (req, res) => {
    try {
        const todos =  await Todo.find({})
        res.render('pages/home', { day: date.getDate(), todos }) ;
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

// const editForm = async (req, res) => {
//     let edit = true
//     try {
//         const todos =  await Todo.find({})
//         res.render('pages/home', { day: date.getDate(), todos, edit }) ;
//     } catch (error) {
//         res.status(400).send(error)
//     }
// }



// // CREATE ONE TODO
// const createTodo = asyncWrapper (async (req, res) => {
//     const todo = await Todo.create(req.body)
//     res.status(200).json({todo})
// })


// // GET ONE TODO
// const getTodo = asyncWrapper (async (req, res, next) => {
//     const {id: todoID} = req.params
//     const todo = await Todo.findOne({_id: todoID})

//     // if id doesn't match any todo
//     if(!todo){
//         return next(createCustomError(`No todo with id : ${todoID}`, 404))
//         // 404 = not found
//     }
//     res.status(200).json({ todo})
// })


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
    try {
        const {id:todoID} = req.params
        const todo = await Todo.findOneAndUpdate({_id: todoID}, req.body, {
            new: true, 
            runValidators: true,
        })
        if(!todo){
            return next(createCustomError(`No todo with id : ${todoID}`, 404))
        }
        res.render('pages/home', { day: date.getDate(), todos }) ;
    } catch (error) {
        res.status(400).send(error)
    }
}



module.exports = {
    home,
    //editForm,
    createTodo,
    // getTodo,
    // updateTodo,
    deleteTodo
}