const express = require('express')
const ErrorHandler = require('./utils/ErrorHandler')
const app = express()
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
// const fileUpload = require('express-fileupload')

app.use(express.json())
app.use(cookieParser())
// need this so that anyone can access this folder
app.use('/', express.static('uploads'))
app.use(bodyParser.urlencoded({ extended: true }))
// app.use(fileUpload({ useTempFiles: true }))

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
