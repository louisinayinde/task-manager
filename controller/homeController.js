const date = require(__dirname + '/date.js')
console.log()

module.exports.home = ("/", (req, res) => {

    res.render('pages/home', {day: date.getDate()})

})