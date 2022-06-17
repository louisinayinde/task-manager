const mongoose = require('mongoose')
const path = require('path')

require('dotenv').config({ path: './.env'} ) ;

//const host = process.env.MONGO_HOST ;
const user = process.env.MONGO_USER ;
const pwd = process.env.MONGO_PWD ;

const db_name = 'todoExpress';

// mongoose

const mongoDB = `mongodb+srv://${user}:${pwd}@cluster0.wnd9u.mongodb.net/${db_name}?retryWrites=true&w=majority`

mongoose.connect(mongoDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("DB coonected!"))
    .catch(err => console.error(err))
