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

app.post('/user/signup', (req, res, next) => {
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;

  User.findOne({ email: email}, (err, user) => {
    if(err){
        console.log(err)
        return res.status(500).json({
            success: false,
            message: err.message
        })
    }
    if(user){
        return res.status(500).json({
            success: false,
            message:"User is already registered"
        })
    }

    return bcrypt.hash(password, 12).then(hashedPassword => {
        const user = new User({
            username: username,
            email: email,
            password: hashedPassword,
            folders:[]
        })

        return user.save();
    })
    .then((result, err) => {
        if(err){
            console.log("Error: ", err)
            return res.status(500).json({
                success: false,
                message: "Something went wrong while saving"
            })
        }
        console.log("User has been registered!");
        res.status(201).json({
            success: true,
            message:"User has been registered successfully"
        })
    })
    .catch(err => {
        console.log(err)
    })
})

});

module.exports = app;

