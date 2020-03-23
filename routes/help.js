const express = require('express');
const router = express.Router();

const db = require('../models');

router.get('/help', (req, res) =>{
    
    
    res.render('help', {
        pageTitle: 'Help',
        
        pageID: 'help'
      });
    
    });



module.exports = router;
