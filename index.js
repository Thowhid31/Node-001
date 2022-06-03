const express = require('express');
const app = express();
var cors = require('cors');
app.use(cors())
const port = process.env.PORT || 5000

app.get('/', (req, res)=>{
    res.send('Hello, I can code with node.js')
})

const users = [
    {
        id: 1,
        name: 'Shabana',
        email: 'sabana@gmail.com',
        phone: '01703040'
    },
    {
        id: 2,
        name: 'Shana',
        email: 'shana@gmail.com',
        phone: '01703041'
    },
    {
        id: 3,
        name: 'Shaina',
        email: 'shaina@gmail.com',
        phone: '01703042'
    },
    {
        id: 4,
        name: 'Subah',
        email: 'subah@gmail.com',
        phone: '01703043'
    }
]

app.get('/users', (req, res)=>{
    res.send(users)
})

app.get('/user/:id', (req, res)=> {
    console.log(req.params);
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id)
    res.send(user)
})

app.post('/user', (req, res)=>{
    console.log('request', req.body);
    res.send('Post Succeed')
})

app.listen(port, () => {
    console.log('Listening to Practice Port', port);
})