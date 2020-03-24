var express = require('express');
var router = express.Router();
const db = require('../models');
let role = '';
let loggedIn = false;

router.get('/contact', function(req, res) {
  if(req.session.userid == 'admin') {
    role = 'admin';
  } else {
    role = 'normal';
  }
  if(req.session.userid != undefined){
    loggedIn = true;
  } else{
    loggedIn = false;
  }
  // console.log(`contact form is ${loggedIn}`);
  res.render('contact', {
    pageTitle: 'CONTACT',
    pageID: 'contact',
    role: role,
    loggedIn: loggedIn
  });
});

//=========================================================
//      Route for when users submit the contact form
//=========================================================
router.post('/contact', (req,res) => {
    // res.send('recieved contact request');
    //pull the values from the form the user submitted:
    let contactName = req.body.contactName;
    let contactEmail = req.body.contactEmail;
    // console.log(`contact email is: ${contactEmail}`);
    let contactPhone = req.body.contactPhone;
    let contactMessage = req.body.contactMessage;
    //the responded key here always has a starting value of no because the user submitted the form and we havn't had a chance to respond yet
    db.contact.create({contactName:contactName, contactEmail:contactEmail, contactPhone:contactPhone, contactMsg:contactMessage, responded:"no"})
    .then((contactRequest) => {
      // console.log(contactRequest);
      res.send('recieved contact request. We will reply soon.');
    })
    .catch((error) => {
      console.log(error);
    })
})

module.exports = router;
