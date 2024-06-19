const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const db = require('./connector/knex');

const app = express()
const port = 3000

app.use(cors())
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('Hello World from api!')
})

app.get('/posts', async (req, res) => {
    const posts = await db('posts').select('*')
    res.json(posts)
})

app.get('/posts/:id', async (req, res) => {
    const { id } = req.params;
    const post = await db('posts').select('*').where('id', id).first()
    res.json(post)
})

app.delete('/posts/:id', async (req, res) => {
    const { id } = req.params;
    try {

        await db('posts').where('id', id).del()

        res.json({
            status: true,
            message: 'Post successfully removed',
            data: req.body
        })

    } catch (err) {
        return res.status(400).send('Unable to remove post!')
    }
})

app.post('/posts', async (req, res, next) => {
    const title = req.body.title;
    const body = req.body.body;

    if (!title || !body) {
        return res.status(400).send('All fields are required!')
    }

    try {

        await db('posts').insert({title, body})

        res.json({
            status: true,
            message: 'Post successfully created',
            data: req.body
        })

    } catch (err) {
        return res.status(400).send('Unable to create a post!')
    }

})

/*app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Internal Server Error' });
});*/

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})