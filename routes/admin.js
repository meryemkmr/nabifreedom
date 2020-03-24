const express = require('express');
const router = express.Router();
let role = '';
let loggedIn = false;

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
    res.render('admin',{
        pageTitle: 'ADMIN',
        role: role,
        loggedIn: loggedIn
    });
}))




module.exports = router;