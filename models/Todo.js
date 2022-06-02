const mongoose = require ("mongoose")

const TodoSchema = new mongoose.Schema({
    title: {
        type : String, 
        required: true,
        maxlength:[50, 'name can not be more than 50 characters']
    },
    content: {
        type : String, 
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    }
})

module.exports = new mongoose.model("Todo", TodoSchema)