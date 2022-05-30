const port = process.env.POR || 3000

const http = require('http')
const app = require('./app')

const server = http.createServer(app)

server.listen(port, () => {
    console.log(`Le server ecoute sur http://127.0.0.1:${port}/`)
})
 