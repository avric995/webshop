const express = require('express')
const path = require('path')
const User = require('../model/User')
const { upload } = require('../multer')
const ErrorHandler = require('../utils/ErrorHandler')
const catchAsyncErrors = require('../middleware/catchAsyncErrors')
const fs = require('fs')
const router = express.Router()
const jwt = require('jsonwebtoken')
const sendToken = require('../utils/jwtToken')
const sendMail = require('../utils/sendMail')

router.post('/create-user', upload.single('file'), async (req, res, next) => {
  try {
    const { firstName, lastName, email, password } = req.body

    const userEmail = await User.findOne({
      email,
    })

    if (userEmail) {
      const filename = req.file.filename
      const filePath = `uploads/${filename}`
      fs.unlink(filePath, (err) => {
        if (err) {
          console.log(err)
          res.status(500).json({ message: 'Error deleting file' })
        }
      })
      return next(new ErrorHandler('User already exists', 400))
    }

    // console.log(req.file)
    const fileName = req.file.filename
    const fileUrl = path.join(fileName)

    const user = {
      firstName,
      lastName,
      email,
      password,
      avatar: fileUrl,
    }

    const activationToken = createActivationToken(user)

    const activationUrl = `http://localhost:5173/activation/${activationToken}`

    try {
      await sendMail({
        email: user.email,
        subject: 'Activate your account',
        message: `Hello ${user.firstName}, please click on the link to activate your account: ${activationUrl}`,
      })

      res.status(201).json({
        success: true,
        message: `please check your email: ${user.email} to activate your account`,
      })
    } catch (error) {
      return next(new ErrorHandler(error.message, 400))
    }
  } catch (error) {
    return next(new ErrorHandler(error.message, 400))
  }
})

const createActivationToken = (user) => {
  return jwt.sign(user, process.env.ACTIVATION_SECRET, {
    expiresIn: '5m',
  })
}

// activate user
router.post(
  '/activation',
  catchAsyncErrors(async (req, res, next) => {
    try {
      const { activation_token } = req.body
      console.log(req.body)

      const newUser = jwt.verify(
        activation_token,
        process.env.ACTIVATION_SECRET
      )

      console.log(newUser)

      if (!newUser) {
        return next(new ErrorHandler('Invalid token', 400))
      }

      const { firstName, lastName, email, password, avatar } = newUser

      let user = await User.findOne({ email })
      if (user) {
        return next(new ErrorHandler('User already exists', 400))
      }

      user = await User.create({
        firstName,
        lastName,
        email,
        avatar,
        password,
      })

      sendToken(user, 201, res)
    } catch (error) {
      return next(new ErrorHandler(error.message, 500))
    }
  })
)

module.exports = router
