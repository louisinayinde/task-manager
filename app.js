const express = require('express')
const app = express()

const path = require('path')
const notFound = require('./middleware/notFound')
const errorHandler = require('./middleware/errorHandler')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// dossier public pour css et asset
app.use(express.static(path.join(__dirname,'public')))

// mongoose
require("./controller/mongoose_init")

// view engine EJS
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')


// layout
const expressLayouts = require('express-ejs-layouts')
app.use(expressLayouts)
app.set('layout', '../views/layouts/layouts')



// ----- ROUTES -----

// app.get('*', (req, res) => {
//     res.redirect('/')
// })

const todoRouter = require('./routes/todoRoute')
app.use('/', todoRouter)

app.use(notFound)
app.use(errorHandler)

module.exports = app