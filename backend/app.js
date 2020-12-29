const { Console } = require('console');
const express = require('express');
const app= express();

// app.use((req , res, next) =>
// {
//   console.log('First Middleware');
//   next();
// });

// app.use((req , res, next) =>
// {
//   res.send ('Hello from expr');
// });

app.use((req ,res , next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Header", "Origin, X-Requested-With,Content-Type,Accept");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PATCH,DELETE,PUT,OPTIONS");
  next();
});

app.use('/api/posts' ,  (req , res, next) =>
{
  const posts = [
    {id : '1' , title : 'First Server side post' , content : 'This is coming from server'},
    {id : '2' , title : 'Second Server side post' , content : 'This is also coming from server'},
  ];
  res.status(200).json({
    message : 'Post fetched successfully!',
    posts: posts
  });
});

module.exports = app;

