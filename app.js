const express = require('express');
const cors = require('cors')


const app = express();


//  routers
const authRouter = require('./routes/authRoute');
const userRouter = require('./routes/userRoute');
const commentRouter = require('./routes/commentsRoute');
const postRouter = require('./routes/postsRoute');
const likeRouter = require('./routes/likesRoute');
const relationshipRouter = require('./routes/relationshipRoute');


app.use(express.json());

// routes

app.get('/', (req, res) => {
  res.send('<h1>Welcome To my Chat api</h1>');
});






app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);
app.use("/api/posts", postRouter);
app.use("/api/comments", commentRouter);
app.use("/api/likes", likeRouter);
app.use("/api/relationships", relationshipRouter);










app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
})