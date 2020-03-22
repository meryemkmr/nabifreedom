const express = require('express');
const router = express.Router();




//ADMIN PAGE
router.get('/admin',  ((req, res) => {
    res.render('admin');
}))




module.exports = router;