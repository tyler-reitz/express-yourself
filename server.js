// requore/import HTTP module
const http = require('http')

// make the port
const PORT = 8080

// create req/res handler
const handler = (request, response) => {
  response.end(`It workded!! Path hit: ${request.url}`)
}

// create NODE server w/ HTTP package
// ’n pass req.handler
const server = http.createServer(handler)

server.listen(PORT, () => {
  console.log('Server listening on: http://localhost:%s', PORT)
})
