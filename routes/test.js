const express = require('express');
const router = express.Router();




//ADMIN PAGE
router.get('/test',  ((req, res) => {
    res.render('test');
}))




module.exports = router;