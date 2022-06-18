import { Request,Response } from "express"
import { QueryResult } from "pg";

import { pool } from "../database"

export const getUsers = async (req:Request,res:Response):Promise<Response>=>{
    try{
    const response:QueryResult = await pool.query('SELECT * FROM users ');
    console.log(response.rows)
    return res.status(200).json(response.rows)
    }
    catch(err){
        return res.status(500).json('Internal Server Error')
    }
}

export const getUserById = async (req:Request,res:Response):Promise<Response> =>{

    const response:QueryResult  =await pool.query('Select * from users where id = $1',[parseInt(req.params.id)])
    return res.status(200).json(response.rows)
}

export const createUser = async (req:Request,res:Response):Promise<Response> =>{
    const {name,email}= req.body
    const response : QueryResult =await pool.query('Insert into users (name,email) values($1,$2)', [name,email])
    return res.json({

        message:"User created",
        body:{
            user:{
                name,
                email
            }
        }    
})

}
