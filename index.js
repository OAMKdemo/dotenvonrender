const port = process.env.PORT || 3000
const http = require('http')
const server = http.createServer((req,res) => {
  res.statusCode = 200
  res.setHeader('Content-Type','text/plain')
  res.end(`Hello ${process.env.PORT}`)
})

server.listen(port,() => {
  console.log(`Server listening on port: ${port}`)
})