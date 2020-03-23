const express = require('express');
const router = express.Router();
const db = require('../models');

router.get('/helpinfo/:id', (req,res) => {
    // console.log(`the name is: ${req.params.name}`)
    // res.send('info page for people')
    db.peoples.findAll({where: {id: req.params.id}})
    .then((personResults) => {
        // console.log('*************************** INDEX 0 ********************************');
        // console.log(personResults[0]);
        // console.log('*************************** INDEX 1 ********************************');
        // console.log(personResults[1]);
        res.render('helpinfo.ejs',{
            person: personResults[0]
        })
    })   
    .catch((error)=>{
        res.redirect('/');
        console.log(error);
    })
})



module.exports = router;