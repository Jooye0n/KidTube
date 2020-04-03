const express = require('express')
const bodyParser = require('body-parser')

require('./db/mongo') //connect db
const main = require('./routes/main')
const signUp = require('./routes/signUp')
const login = require('./routes/login')
const channel = require('./routes/channel')
const theme = require('./routes/theme')
const video = require('./routes/video')

const app = express();
app.use((req, res, next) =>{
    res.header("Access-Control-Allow-Origin", "*")
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type")
    next();
})
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use('/main', main)
app.use('/signUp', signUp)
app.use('/login', login)
app.use('/channel', channel)
app.use('/theme', theme)
app.use('/video', video)

module.exports = app