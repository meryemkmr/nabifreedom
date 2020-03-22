const express = require('express');
const router = express.Router();
var bcrypt = require('bcryptjs');

//LOADING USER MODELS/PROFILES
var db = require('../models')

//LOGIN PAGE
router.get('/login',  ((req, res) => {
    res.render('login');
}))

router.post('/login',(req,res)=>{
    let email = req.body.email;
    let password = req.body.password;

    db.users.findAll({where: {email: email}}) //see if the email already exists in our database
    .then(((results) => { //an array of objects. each object is a record in the database.
        if(results.length > 0){ //if a matching email was found
            //test if passwords match. Format: bcrypt.compare(password the user entered, database password, callback Function)
            //interestingly, we don't have to do anything special to the unencrypted password the user entered for bcrypt.compare to check it
            //against the encrypted password
            bcrypt.compare(password, results[0].password, (error, response) => {
                //response = match, error = no match  
                if(response){ //if the passwords match
                    req.session.userid = email; //here we create a cookie based on the user logging in successfully
                    res.redirect('/');
                } else { //if the passwords do not match
                    res.redirect('/error')
                }
            })
        } else { //if we do not find a matching email
            res.redirect('/error');
        }  
    }))
    .catch(error=>{
        console.log(error);
    })

})

//ERROR
router.get('/error',(req,res)=>{
    res.send('error');
})

//LOGOUT
router.get('/logout', (req, res) => {
    req.session.destroy((err) => { //this will destroy the login cookie and log the user out
        res.redirect('/');
     })
});


module.exports = router;