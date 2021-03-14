require('dotenv').config()
const express = require('express')
const app = express()
const path = require('path')

app.listen(process.env.PORT, () => {
	console.log('http://127.0.0.1:'+process.env.PORT);
});

const boardRouter = require('./routes/board')
const userRouter = require('./routes/user')
app.use('/board', boardRouter)
app.use('/user', userRouter)



app.use((err, req, res, next) => {
	console.log(err);
})

