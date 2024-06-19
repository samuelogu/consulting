const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const createError = require('http-errors');

const app = express()
const port = 3000

const posts = require('./posts');

app.use(cors())
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('Hello World from api!')
})

app.get('/posts', (req, res) => {
    res.json(posts)
})

app.post('/posts', (req, res, next) => {
    const title = req.body.title;
    const body = req.body.body;

    if (!title || !body) {
        return res.status(400).send('All fields are required!')
    }

    res.json({
        status: true,
        message: 'Post successfully created',
        data: req.body
    })
})

/*app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Internal Server Error' });
});*/

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})