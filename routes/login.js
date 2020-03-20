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
    let password =  req.body.password;


    //find user in database
    // make sure passport is valid
    //set session userID

    db.user.findAll({where: {email:email}})


    
    .then(results=>{

        // results array of object
        //each object record in the database

        if(results.length >0){
            //test password
            // a match was found

            bcrypt.compare(password, results[0].password, (err, response)=>{
                if (response) {
                    // set session variable
                    req.session.emailid = email;
                    console.log(password);
                    console.log(email);
                    console.log(results);
                    res.redirect('/');
                }
                else {
                    res.redirect('/error')
                }
                
            })
            
        }
        else{
            // no user was found
            res.redirect('/register')
        }
       

        
    })
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
res.redirect('/login');
});


module.exports = router;