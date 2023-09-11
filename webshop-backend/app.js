const express = require('express')
const ErrorHandler = require('./middleware/error')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cookieParser())
app.use(
  cors({
    origin: 'http://localhost:5173',
    credentials: true,
  })
)
// need this so that anyone can access this folder
app.use('/', express.static('uploads'))
app.use(bodyParser.urlencoded({ extended: true }))

// config
if (process.env.NODE_ENV !== 'PRODUCTION') {
  require('dotenv').config({
    path: 'webshop-backend/config/.env',
  })
}

// import routes
const userController = require('./controller/userController')

app.use('/api/v2/user', userController)

// it's for ErrorHandling
app.use(ErrorHandler)

module.exports = app
