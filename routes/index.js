var express = require('express');
var router = express.Router();
let role = '';
let loggedIn = false;

router.get('/', function(req, res) {
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
  res.render('index', {
      pageTitle: 'NABIFREEDOM',
      pageID: 'home',
      role: role,
      loggedIn: loggedIn
    });
});

module.exports = router;
