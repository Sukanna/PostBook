const { Console } = require('console');
const express = require('express');
const app= express();

// app.use((req , res, next) =>
// {
//   console.log('First Middleware');
//   next();
// });

app.use('\api\posts' ,  (req , res, next) =>
{
  //res.send ('Hello from express');
  const posts = [];
  res.json();
});

module.exports = app;

