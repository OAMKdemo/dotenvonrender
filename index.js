//https://www.dotenv.org/docs/languages/nodejs/render
// npx dotenv-vault@latest new
// npx dotenv-vault@latest login
// npx dotenv-vault@latest push
// npx dotenv-vault@latest open production
// npx dotenv-vault@latest build
// commit to git

require('dotenv').config()
console.log(process.env)
const port = process.env.PORT || 3000
const http = require('http')
const server = http.createServer((req,res) => {
  res.statusCode = 200
  res.setHeader('Content-Type','text/plain')
  res.end(`Hello ${process.env.HELLO}`)
})

server.listen(port,() => {
  console.log(`Server listening on port: ${port}`)
})