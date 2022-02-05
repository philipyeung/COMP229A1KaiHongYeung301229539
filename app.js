//*******************************************************************
//  COMP229   Personal Portfolio Website
//  File name       : app.js
//  Student’s Name  : Kai Hong Yeung
//  StudentID       : 301229539
//  Date            : 2 Feb 2022
//*******************************************************************

let createError = require('http-errors');
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');

let indexRouter = require('./routes/index');
let usersRouter = require('./routes/users');

let app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'node_modules')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

//////////////Contact Me page contact message form post information submit and redirect
//TODO: Your Contact Page should include a short interactive form that allows the user send you a message and provide basic contact information
//TODO: capture the information entered by the user and redirect them back to the Home Page
app.get('/',function(req,res){
  return res.redirect('index.html');
  })

app.post('/contactMessage', function(req, res){

  var firstName = req.body.firstName;
  var lastName = req.body.lastName;
  var contactNumber = req.body.contactNumber;
  var email =req.body.email;  
  var message =req.body.message;

  var data = {
    "firstName": firstName,
    "lastName":lastName,
    "contactNumber":contactNumber,
    "email":email,
    "message":message
  }

  //res.render('index.ejs', {title:'', body: req.body})
  res.render('contactme.ejs', {title:'', body: data, response: "Thanks for your contacting. I'll get back to you soon."})

  return res.redirect('contactme.ejs');

  //TODO: redirect them back to the Home Page ?
  //return res.redirect('index.ejs');

});
///////////////

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error', { title: 'Error'});
  
});


/*
app.post('/contactMessage',function(req,res){
  console.log(req.body.title);
  var title = req.body.title;
   
  res.render('search',{
      'title':title
  });
})
*/




module.exports = app;
