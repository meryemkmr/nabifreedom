const express = require('express');
const router = express.Router();


let auth = (req, res, next) => {
      if(req.session.userid == 'admin') { //if the proper cookie exists
        next(); //we will send the request and response to the callback function in the app.get('/admin') route above.
      } else { //if that cookie does not exist, we will redirect them.
        res.redirect('/login');
      }
}


//ADMIN PAGE
router.get('/admin', auth, ((req, res) => {
    res.render('admin',{
        pageTitle: 'ADMIN'
    });
}))




module.exports = router;