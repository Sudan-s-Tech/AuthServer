const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://sudantech:sudantech@cluster0.jlees.mongodb.net/Auth-API' , {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
})