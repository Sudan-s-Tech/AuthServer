const express = require('express')
const User = require('../model/user')
const auth = require('../middleware/auth')


const router = new express.Router()



router.post('/users/signup', async (req, res) => {
    try {
        console.log('you reached route')
        const user = new User(
            {
                name : req.body.name,
                phone: req.body.phone,
                email: req.body.email,
                password : req.body.password
            }
        )
        const userSignedUp = await user.save()
        const token = await user.generateAuthToken()
        res.status(201).send({userSignedUp , token})
        // res.status(201).send(`hello there`)
    } catch(e) {
        console.log(e)
        res.status(400).send(e)
    }
})


router.post('/users/login', async (req,res) => {
    try{
        const user = await User.findByCredentials(req.body.email , req.body.password)
        const token = await user.generateAuthToken()
        res.send({user, token})
        console.log(res)
    }catch(e){
        res.status(400).send()
        console.log(e)
    }
})


router.post('/users/logout', auth ,async(req,res) => {
    try{
        req.user.tokens = req.user.tokens.filter((token) => {
            return token.token !== req.token
        }) 
        await req.user.save()
        res.send()
    }catch(e){
        req.status(500).send()
    }

})


router.get('/users/me', auth , async (req, res) => {
    res.send(req.user)
})


module.exports = router