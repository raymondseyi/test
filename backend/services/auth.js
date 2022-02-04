import pool from '../config/database.js'



export const createUser = (data, callback)=>{
  pool.query(
    'insert into user_tb(firstname, lastname, email, password, passport, phonenumber) values(?,?,?,?,?)', [
      data.firstname,
      data.lastname,
      data.email,
      data.password,
      data.passport,
      data.phonenumber
    ], (error, results, fields)=>{
      if(error){
        return callback(error)
      }
      return callback(null, results)  
    }
  )
}






export const getUserByUserId = (id, callback)=>{
  pool.query(
    'select * from User_tb where id = ?', [id], (error, results, fields)=>{
      if (error) {
        return callback(error)
      }
      return callback(null, results[0])
    }
  )
}




export const getUserByEmail = (email, callback)=>{
  pool.query(
    'select * from User_tb  where email = ?', [email], (error, results, fields)=>{
      if (error) {
        return callback(error)
      }
      return callback(null, results[0])
    }
  )
}






