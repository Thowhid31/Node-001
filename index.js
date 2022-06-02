const express = require('express');
const app = express();
const port = process.env.PORT || 5000

app.get('/', (req, res)=>{
    res.send('Hello, I can code with node.js')
})

app.get('/users', (req, res)=>{
    res.send('Hello from users')
})

app.listen(port, () => {
    console.log('Listening to Practice Port', port);
})