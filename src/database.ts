import {Pool} from 'pg'

export const pool = new Pool(
    {user:'postgres',
    host:'localhost',
    password:'asroma90',
    database:'typescriptdb',
    port:5432
})

