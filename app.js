const express = require('express');
const cors = require('cors')


const app = express();






// routes

app.get('/', (req, res) => {
  res.send('<h1>Welcome To my Chat api</h1>');
});
















app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
})