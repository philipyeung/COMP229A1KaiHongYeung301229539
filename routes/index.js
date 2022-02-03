//*******************************************************************
//  COMP229   Personal Portfolio Website
//  File name       : app.js
//  Student’s Name  : Kai Hong Yeung
//  StudentID       : 301229539
//  Date            : 2 Feb 2022
//*******************************************************************

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', 
  { title: 'Home' ,
  mainHeading: "Main Heading"
});
});

/*This Express site must include the pages from your Personal Portfolio 5 pages – your 
Home page, an About Me page, a Projects page, a Services page, and a Contact Me page.*/

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home', body: ''});
});

/* GET About Me page. */
router.get('/aboutme', function(req, res, next) {
  res.render('aboutme', { title: 'About Me'});
});

/* GET Projects page. */
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects'});
});

/* GET Services page. */
router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Services'});
});

/* GET Contact Me page. */
router.get('/contactme', function(req, res, next) {
  res.render('contactme', { title: 'Contact Me', body: '', response:""});
});



module.exports = router;
