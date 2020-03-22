const express = require('express');
const app = express();
const router = express.Router();

//flash message middleware
app.use((req, res, next)=>{
    res.locals.message = req.session.message
    delete req.session.message
    next()
})




router.get('/johntest', (req,res) => {
    req.session.message = {
        type: 'danger',
        intro: 'Empty fields! ',
        message: 'Please insert the requested information.'
    }
    res.render('johntest.ejs');
})



module.exports = router;