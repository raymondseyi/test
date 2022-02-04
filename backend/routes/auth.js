import express from 'express'
import { getUserById, login, registerUser, tryUpload, } from '../controllers/auth.js'

import { tryUpload } from '../controllers/auth.js'
import { verifyToken } from '../middlewares/auth_middleware.js'

const router = express.Router()



router.post("/", registerUser)
router.post("/login", login)
router.get('/:id', verifyToken, getUserById)
router.post("/upload", tryUpload, uploadImage)




export default router