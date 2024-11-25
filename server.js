//raquire express
const express = require('express')
//require dotenv
require('dotenv').config()

//instance of express`
const app = express()

//connexion to db
const connectDB = require('./config/connectDB')
connectDB()

//routes
app.get('/test', (req, res) => {
    res.end('THis is a test!!')
})
//toDO:CRUD

//Port 
const PORT = process.env.PORT || 4000

//server
app.listen(PORT, (err) => {
    err ? console.log(err)
        : console.log(`The server is running on : http://127.0.0.1:${PORT}`)
})