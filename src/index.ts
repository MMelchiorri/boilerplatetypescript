import express from 'express'
const app =express()

import moduleName from './routes/index'

app.use(express.json())

app.listen(3000)

console.log('Server on port',3000)

app.use(moduleName)



