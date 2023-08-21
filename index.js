const express = require('express');
const { connection } = require('./db');
const { postRoute } = require('./route/postroute');
const { userRouter } = require('./route/userroute');

const app = express();
app.use(express.json())

app.use('/users', userRouter)
app.use('/posts', postRoute)

app.listen('8089', async () => {
    try {
        await connection;
        console.log('running at 8089 port')
    } catch (err) {
        console.log(err)
    }
})