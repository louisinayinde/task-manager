const mongoose = require('mongoose')
const path = require('path')

require('dotenv').config({ path: './.env'} ) ;

//const host = process.env.MONGO_HOST ;
const user = process.env.MONGO_USER ;
const pwd = process.env.MONGO_PWD ;

//const db_name = 'todo_express';

// mongoose

const mongoDB = `mongodb://${user}:${pwd}@cluster0-shard-00-00.wnd9u.mongodb.net:27017,cluster0-shard-00-01.wnd9u.mongodb.net:27017,cluster0-shard-00-02.wnd9u.mongodb.net:27017/?ssl=true&replicaSet=atlas-y8i8l4-shard-0&authSource=admin&retryWrites=true&w=majority`

mongoose.connect(mongoDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("DB coonected!"))
    .catch(err => console.error(err))
