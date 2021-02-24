const express = require('express');

const app = express();

app.use('/api/posts', (req,res,next) => {
  const posts = [
    { id: 'jask2jk2ls9', title: 'First server-side post', content: "This is coming from the server"},
    { id: '23k4l5g9axj', title: 'Second server-side post', content: "This is coming from the server!"},
  ];
  res.status(200).json({
    message: 'Posts Fetched Succesfully!',
    posts: posts
  });
});

module.exports = app;
