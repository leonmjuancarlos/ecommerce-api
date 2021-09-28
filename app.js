const express = require('express')
const app = express()

const cors = require('cors')

const corsOptions = {
  origin: 'http://localhost:3000',
}

require('dotenv').config()

app.use(express.json()) // to support JSON-encoded bodies
// app.use(express.urlencoded()) // to support URL-encoded bodies
app.use(cors(corsOptions))

app.get('/phones', (req, res) => {
  const phones = require('./data/phones')
  res.json(phones)
})

app.get('/phones/:id', (req, res) => {
  const phone = require('./data/phones')[req.params.id]
  res.json(phone)
})

app.get('/about', (req, res) => {
  res.download('about-us.pdf')
})

app.listen(process.env.PORT || '3001', () =>
  console.log(`Listening on port ${process.env.DB_PORT || '3001'}...`)
)
