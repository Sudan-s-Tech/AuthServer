const express = require('express')
require('./src/db/mongoose')
const userRouter = require('./src/router/user')

//Server Creation
const app = express()
const port = 3000


app.use(express.json())
app.use(userRouter)

app.listen(port, () => {
    console.log('Server is up on port ' +  port)
})