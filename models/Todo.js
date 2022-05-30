const mongoose = require ("mongoose")

const TOdoSchema = new mongoose.Schema({
    todo: {
        type : TimeRanges, 
        required: true
    },
})

module.exports = new mongoose.model("Todo", TodoSchema)