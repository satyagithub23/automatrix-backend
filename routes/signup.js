const express = require('express')
const app = express()
const user = require('../db_model_schema')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }));


app.post('/signup', async (req, res) => {
    const username = req.body.user_name
    const email = req.body.email
    const password = req.body.password

    if (username == null || email == null || password == null) {
        return res.status(400).json({msg: "All fields are required"})
    }

    
    try {
        const result = await user.User.create({
            userName: username,
            email: email,
            passWord: password
        });
    
        res.send('Account created successfully')    
    } catch (error) {
        return res.status(501).json({msg: `Bad request`});
    }
    

});

module.exports = app