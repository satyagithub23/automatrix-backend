const express = require('express')
const app = express()
const port = 3300
const update = require('./routes/update_scene')
const login = require('./routes/login')
const signup = require('./routes/signup')
const createScene = require('./routes/create_scene')

app.get('/', (req, res) => {
  res.send(`Hello Sir!I am Jarvis`)
})

app.use(update)
app.use(login)
app.use(signup)
app.use(createScene)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
