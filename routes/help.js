const express = require('express');
const router = express.Router();

const db = require('../models');

router.get('/help', (req, res) =>{
    
    
    db.peoples.findAll()
    .then(results => {
        results.forEach(record=>{
            console.log("=======RECORD=======")
            console.log(record)
            res.render('help.ejs', {
                peoples: record
              })
        })
      
    })
    .catch((error)=>{
        res.send("there was an error")
    })
});



module.exports = router;
