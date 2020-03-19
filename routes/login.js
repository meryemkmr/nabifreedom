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

//REGISTRATION
router.get('/register',  ((req, res) => {
    let error = req.query.error;
    let err = "hidden";

    if (error) {
        err = "visible"
    }
    //encrypt the password
    //add information to database 

    
    res.render('register',{
        error:err
    })
}))


router.post('/register',(req,res)=>{
    let fName = req.body.fName;
    let lName = req.body.lName;
    let email = req.body.email;
    let username = req.body.username;
    let password =  bcrypt.hashSync(req.body.password,8);
    let password2 = req.body.password2;

    db.user.create({fName:fName, lName:lName, username:username, email:email, password:password})
    .then((user) => {
        // req.flash('success_msg', 'You are now registered and can log in');
        res.redirect('/login')
    })
    .catch((error) => {
        res.redirect('register?error=visible')
    })

})






//LOGOUT
router.get('/logout', (req, res) => {
    
   
    res.redirect('/login');
  });


module.exports = router;