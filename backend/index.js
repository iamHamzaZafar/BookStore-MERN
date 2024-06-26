
import express from 'express'
import dotenv from 'dotenv'
import dbConnection from './dbConnect.js'
const app = express()
const PORT = process.env.PORT || 4000


import bookRoute from './routes/book.route.js'

dotenv.config()

dbConnection();

// Defining Routes

app.use('/book',bookRoute)

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})