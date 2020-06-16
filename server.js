const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')

let port = process.env.PORT
if (port == null || port === '') {
  port = 8000
}
app.listen(port)

app.use(cors())
app.use(bodyParser.json())

app.listen(port, function () {
  console.log('Server is running on Port: ' + port)
})
