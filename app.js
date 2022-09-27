const express = require('express');
const tasks = require('./routes/tasks')
const app = express(); 
const connectDB = require('./db/connect')
require('dotenv').config()

app.use(express.static('./public'))
app.use(express.json())

app.get('/hello', (req,res) => {
    console.log('hello')
    res.send('task manager')
})

app.use('/api/v1/tasks', tasks)

const port = 5000

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`server is listening on port ${port}`))
    } catch (error) {
        console.log(error)
    }
}

start()
