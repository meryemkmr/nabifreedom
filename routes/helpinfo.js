const express = require('express');
const router = express.Router();
const db = require('../models');
let role = '';
let loggedIn = false;

router.get('/helpinfo/:id', (req,res) => {
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
    db.peoples.findAll({where: {id: req.params.id}})
    .then((personResults) => {
        // console.log('*************************** INDEX 0 ********************************');
        // console.log(personResults[0]);
        // console.log('*************************** INDEX 1 ********************************');
        // console.log(personResults[1]);
        res.render('helpinfo.ejs',{
            person: personResults[0], //weirdly, this only seems to work with the [0] index 
            //if i try to pass the entire object, the ejs doesn't work
            pageTitle: personResults[0].name,
            pageid: 'info',
            role: role,
            loggedIn: loggedIn
        })
    })   
    .catch((error)=>{
        res.redirect('/');
        console.log(error);
    })
})



module.exports = router;