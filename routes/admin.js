const express = require('express');
const router = express.Router();
let role = '';
let loggedIn = false;
const db = require('../models');

let auth = (req, res, next) => {
      if(req.session.userid == 'admin') { //if the proper cookie exists
        role = 'admin';
        loggedIn = true;
        next(); //we will send the request and response to the callback function in the app.get('/admin') route above.
      } else { //if that cookie does not exist, we will redirect them.
        res.redirect('/login');
      }
}

//ADMIN PAGE
router.get('/admin', auth, ((req, res) => {
    //get all the users first
    db.users.findAll()
    .then((userResults) => {
        //get the contact table next
        db.contact.findAll()
        .then((contactResults) => {
            //the the peoples table next
            db.peoples.findAll()
            .then((peoplesResults) => {
                res.render('admin',{
                    pageTitle: 'ADMIN',
                    role: role,
                    loggedIn: loggedIn,
                    userResults: userResults,
                    contactResults: contactResults,
                    peoplesResults: peoplesResults
                });
            })
        })
    })
    
    
    // res.render('admin',{
    //     pageTitle: 'ADMIN',
    //     role: role,
    //     loggedIn: loggedIn
    // });
}))



// .catch((error)=>{
//     res.redirect('/');
//     console.log(error);
// })


module.exports = router;