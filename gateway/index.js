// A demo API Gateway
const express = require('express');
const cors = require('cors');
const proxy = require('express-http-proxy');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/user', proxy('http://localhost:3001'))
app.use('/comment', proxy('http://localhost:3003'))
app.use('/like', proxy('http://localhost:3002')) // product
app.use('/post', proxy('http://localhost:3003'))
app.use('/relationship', proxy('http://localhost:3003'))


app.listen(3000, () => {
    console.log('Gateway is Listening to Port 3000')
})