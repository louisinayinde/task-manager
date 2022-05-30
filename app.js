const express = require('express')
const app = express()
const mongoose = require('mongoose')

const path = require('path')


// mongoose
mongoose.connect("mongodb://localhost/todo_express", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use(express.urlencoded({ extended: true }))


// dossier public pour css et asset
app.use(express.static(path.join(__dirname,'public')))


// view engine EJS
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))


// layout
const expressLayouts = require('express-ejs-layouts')
app.use(expressLayouts)
app.set('layout', '../views/layouts/layouts')



// ----- ROUTES -----

const homeRouter = require('./routes/homeRoute')
app.use('/', homeRouter)

app.get('*', (req, res) => {
    res.redirect('/')
})

module.exports = app