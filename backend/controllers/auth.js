import cloudinary from '../cloudinary/cloud.js'
import multer from 'multer'
import { CloudinaryStorage } from 'multer-storage-cloudinary'
import { createUser, getUserByUserId, getUserByEmail } from "../services/auth.js"
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'


dotenv.config()

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'flutter_media',
    format: async (req, file) => 'png',
  },
});
const parser = multer({ storage: storage });

export const tryUpload = (parser.single('image'))



const { genSaltSync, hashSync, compareSync } = bcrypt
const { sign } = jwt






// login
export const login = async (req, res) => {
  const body = req.body
  getUserByEmail(body.email, (err, results) => {
    if (err) {
      console.log(err);
      return res.status(500).json({
        success: 0,
        message: "Database connection error"
      })
    }
    if (!results) {
      return res.status(404).json({
        success: 0,
        message: "Invalid email or password"
      })
    }

    const result = compareSync(body.password, results.password)
    console.log(body.password, results.password);
    if (result) {
      results.password = undefined
      const jsontoken = sign({ data: results }, process.env.JWT_SEC, {
        expiresIn: "1d"
      })
      return res.status(200).json({
        success: 1,
        message: "login successfully",
        data: results,
        token: jsontoken
      })
    } else {
      return res.status(403).json({
        success: 0,
        message: "Invalid password"
      })
    }
  })
}
























export const registerUser = async (req, res) => {
  const body = req.body;

  const salt = genSaltSync(10);
  body.password = hashSync(body.password, salt)

  getUserByEmail(body.email, (err, result) => {
    if (result) {
      return res.status(500).json({
        success: 0,
        message: "User with the email already exist"
      })
    } else if (err) {

      return res.status(500).json({
        success: 0,
        message: "Database connection error"
      })
    } else {
      createUser(body, (err, results) => {
        if (err) {
          console.log(err);
          return res.status(500).json({
            success: 0,
            message: "Database connection error"
          })
        }
        return res.status(200).json({
          success: 1,
          message: "user creaated successfully"
        })
      }

      )
    }


  })
}




// getuser by id
export const getUserById = async (req, res) => {
  const id = req.params.id

  getUserByUserId(id, (err, results) => {
    if (err) {
      console.log(err);
      return res.status(500).json({
        success: 0,
        message: "Database connection error"
      })
    }
    if (!results) {
      return res.status(404).json({
        success: 0,
        message: "Record not found"
      })
    }

    return res.status(200).json({
      success: 1,
      data: results
    })
  })
}











