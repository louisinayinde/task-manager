const express = require('express')
const app = express()

const path = require('path')
const notFound = require('./middleware/notFound')
const errorHandler = require('./middleware/errorHandler')

app.use(express.urlencoded({ extended: true }))


// dossier public pour css et asset
app.use(express.static(path.join(__dirname,'public')))
app.use(express.json())

// mongoose
require("./controller/mongoose_init")

// view engine EJS
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))


// layout
const expressLayouts = require('express-ejs-layouts')
app.use(expressLayouts)
app.set('layout', '../views/layouts/layouts')



// ----- ROUTES -----

const todoRouter = require('./routes/todoRoute')
app.use('/todo', todoRouter)

app.use(notFound)
app.use(errorHandler)

app.get('*', (req, res) => {
    res.redirect('/')
})

module.exports = app