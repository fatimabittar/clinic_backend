const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const {errorHandler}= require('./middleware/errorMiddleware.js')
const port= process.env.PORT || 8000
const guestRoutes = require('./routes/guestRoutes.js')
const adminRoutes = require('./routes/adminRoutes.js')

const connectDB =require("./config/db.js")

connectDB();

const app= express();
//middleware functions to allow me to parse from the body
app.use (express.json())
app.use(express.urlencoded({extended : false}))

app.use('/api/guests',guestRoutes)
app.use('/api/admins',adminRoutes)


app.use(errorHandler)

app.listen(port, ()=> console.log(`Server started on port ${port}`))


