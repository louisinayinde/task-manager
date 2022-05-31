const mongoose = require ("mongoose")

const TodoSchema = new mongoose.Schema({
    title: {
        type : String, 
        required: true
    },
    content: {
        type : String, 
        required: true
    },
})

module.exports = new mongoose.model("Todo", TodoSchema)