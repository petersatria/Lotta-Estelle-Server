require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const PORT = process.env.PORT || 3000

app
  .use(cors())
  .use(express.urlencoded({ extended: true }))
  .use(express.json())
  .use(require('./routes'))

app.listen(PORT, () => {
  console.log(`App listening on PORT ${PORT}`)
})