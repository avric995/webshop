const app = require('./app')
const connectDatabase = require('./db/Database')

// handling uncaught Exception
process.on('uncaughtException', (err) => {
  console.log(`Error: ${err.message}`)
})

// config
if (process.env.NODE_ENV !== 'PRODUCTION') {
  require('dotenv').config({
    path: 'webshop-backend/config/.env',
  })
}

// connect db

connectDatabase()

// create server
const port = process.env.PORT || 5000

const server = app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})

// unhandeled promise rejection
process.on('unhandledRejection', (err) => {
  console.log(`Shutting down the server for ${err.message}`)
  console.log(`Shutting down the server for unhandled promise rejection`)

  server.close(() => {
    process.exit(1)
  })
})
