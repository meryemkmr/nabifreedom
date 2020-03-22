//=======================================================
//                     REGISTRATION
//=======================================================
const express = require('express');
const app = express();
const router = express.Router();
const bcrypt = require('bcryptjs');



//LOADING USER MODELS/PROFILES
var db = require('../models')

// app.use(bodyParser.urlencoded({extended: false}));
// app.use(cookieParser('secret'))
// app.use(session({cookie: {maxAge: null}}))


router.get('/register', (req,res) => {
    res.render('register.ejs');
})

router.post('/register', (req,res) => {
    let fName = req.body.fName;
    let lName = req.body.lName;
    let email = req.body.email;
    let username = req.body.username;
    let passwordToCheck = req.body.password;
    let password =  bcrypt.hashSync(req.body.password,8); //first arg: string to encrypt, 2nd arg: salt, and how long the salt is. 8 characters in this case.
    let password2 = req.body.password2;
    
    //=======================================================
    //              Registration Form QA Checks
    //=======================================================
    if(!fName || !lName || !email || !username || !passwordToCheck || !password2){ //check to see that all fields are filled out
        // res.redirect('/register');
        // console.log(req.session.message);
        // res.redirect('/register');
        res.redirect('/error');
    } else if(passwordToCheck != password2) { //check to see that the passwords match
        res.redirect('/error');
    } else {//check to see if the email address has already been used
        db.users.findAll({where: {email: email}})
        .then((results) => {
            if(results.length > 0){ //is someone has already registered with that address
                res.redirect('/error');
            } else{ // checks passed, add user to database
                db.users.create({fName: fName, lName:lName, email:email, username:username, password:password, })
                .then((user) => {
                    res.redirect('./login');
                })
                .catch((error) => {
                    console.log(error);
                })
            }
        })
    }

})

module.exports = router;

























//==========================================================
//                 Meryem's Original Code
//==========================================================


// router.get('/register',  ((req, res) => {
//     let error = req.query.error;
//     let err = "hidden";
//     if (error) {
//         err = "visible"
//     }
//     //encrypt the password
//     //add information to database 
//     res.render('register',{
//         error:err
//     })
// }))


// router.post('/register',(req,res)=>{
//     let fName = req.body.fName;
//     let lName = req.body.lName;
//     let email = req.body.email;
//     let username = req.body.username;
//     let password =  bcrypt.hashSync(req.body.password,8);
//     let password2 = req.body.password2;

//     db.user.create({fName:fName, lName:lName, username:username, email:email, password:password})
//     .then((user) => {
//         // req.flash('success_msg', 'You are now registered and can log in');
//         res.redirect('/login')
//     })
//     .catch((error) => {
//         res.redirect('register?error=visible')
//     })

// })