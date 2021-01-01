const { Console } = require('console');
const bodyParser = require('body-parser');
const express = require('express');

const app= express();

app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended : false}));

app.use((req ,res , next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With,Content-Type,Accept");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PATCH,DELETE,PUT,OPTIONS");
  next();
});

// app.use((req , res, next) =>
// {
//   console.log('First Middleware');
//   next();
// });

// app.use((req , res, next) =>
// {
//   res.send ('Hello from expr');
// });
app.post("/api/posts" , (req , res, next) =>{
  const post = req.body;
  console.log('Post added successfully!!');
  console.log(post);
  res.status(201).json({
    message:'post added successfully'
  });
});

app.get('/api/posts' ,  (req , res, next) =>
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

