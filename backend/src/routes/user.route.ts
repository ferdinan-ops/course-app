import express from 'express'
import { changeEmail, changePassword, changeProfilePicture, updateMe } from '../controllers/user.controller'
import upload from '../middlewares/multer'
import verifyJwt from '../middlewares/verifyJwt'

const userRoute = express.Router()

userRoute.put('/', verifyJwt, updateMe)
userRoute.put('/change-password', verifyJwt, changePassword)
userRoute.put('/change-email', verifyJwt, changeEmail)
userRoute.put('/change-photo', upload.single('photo'), verifyJwt, changeProfilePicture)

export default userRoute
