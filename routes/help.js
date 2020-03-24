const express = require('express');
const router = express.Router();
let role = '';
let loggedIn = false;

const db = require('../models');

router.get('/help', (req, res) =>{
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
    // console.log(`help form is ${loggedIn}`);
    // console.log(req.session.userid)
    db.peoples.findAll()
    .then(results => {
      // console.log(results)
      // console.log(testVariable);
      res.render('help.ejs',{
          peoples: results,
          pageTitle: 'HELP PEOPLE',
          role: role,
          loggedIn: loggedIn
      })
    
    })
    .catch((error)=>{
        res.send("there was an error")
    })
});




module.exports = router;
