const http = require('http')

const PORT1 = 7000
const PORT2 = 7500

function good(request, response) {
  response.end('You’re a dunce')
}

function bad(request, response) {
  response.end('You’re okay, I guess…')
}

const server1 = http.createServer(good)
const server2 = http.createServer(bad)

server1.listen(PORT1, () => {
  console.log('Server listening on port: %s', PORT1)
})

server2.listen(PORT2, () => {
  console.log('Server listening on port: %s', PORT2)
})
