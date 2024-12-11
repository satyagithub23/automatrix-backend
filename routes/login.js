const express = require('express')
const app = express()
const user = require("../db_model_schema")
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/user_login', async (req, res) => {
    const email = req.body.user_email
    const password = req.body.user_password
    console.log(email);
    console.log(password);
    if (email == null || password == null) {
        res.status(400).json({msg: "All fields are required"})
    } else {
        const users = await user.User.find({
            $and: [
              { email: `${email}` },
              { passWord: `${password}` },
            ],
          })
        const userName  = users[0].userName
        res.status(200).json({msg:`[{"result":"exist","uName":"${userName}"}]`})
    } 
})

module.exports = app
