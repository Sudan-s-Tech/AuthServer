const express = require('express')
require('./db/mongoose')
const userRouter = require('./router/user')
const cors = require("cors");

//Server Creation
const app = express()
const port = 5000

app.use(cors())
app.use(express.json())
app.use(userRouter)

app.listen(port, () => {
    console.log('Server is up on port ' +  port)
})