require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const port = 3000

app
  .use(cors())
  .use(express.urlencoded({ extended: true }))
  .use(express.json())
  .use(require('./routes'))


app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})