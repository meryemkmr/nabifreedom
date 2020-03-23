const express = require('express');
const router = express.Router();

const db = require('../models');

router.get('/help', (req, res) =>{
    
    
    db.peoples.findAll()
    .then(results => {
      // console.log(results)
      res.render('help.ejs',{
          peoples: results
      })
      
    })
    .catch((error)=>{
        res.send("there was an error")
    })
});




module.exports = router;
