const express = require('express')
const path = require('path')
const User = require('../model/User')
const { upload } = require('../multer')
const ErrorHandler = require('../utils/ErrorHandler')
const router = express.Router()

router.post('/create-user', upload.single('file'), async (req, res, next) => {
  const { firstName, lastName, email, password } = req.body

  const userEmail = await User.findOne({
    email,
  })

  if (userEmail) {
    return next(new ErrorHandler('User already exists', 400))
  }

  const fileName = req.file.filename
  const fileUrl = path.join(fileName)

  const user = {
    firstName,
    lastName,
    email,
    password,
    avatar: fileUrl,
  }

  console.log(user)
})

module.exports = router
