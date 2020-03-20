//=======================================================
//                     REGISTRATION
//=======================================================
const express = require('express');
const app = express();
const router = express.Router();
const bcrypt = require('bcryptjs');
const bodyParser = require('body-parser');
// const flash = require('express-flash');
// const cookieParser = require('cookie-parser');
// const sessions = require('express-session');
//LOADING USER MODELS/PROFILES
var db = require('../models')

app.use(bodyParser.urlencoded({extended: false}));

//=======================================================
//                  Set up express-flash
//=======================================================
// initialise session middleware - flash-express depends on it
// app.use(session({
// secret : "<add a secret string here>",
// resave: false,
// saveUninitialized: true
// }));
// // initialise the flash middleware
// app.use(flash());
// app.use(cookieParser());
// app.use(sessions({
//     secret: 'asdfghi',
//     cookie: {secure: false, maxAge: 14 * 24 * 60 * 60 * 1000} //two weeks in milliseconds
// }))
// app.use(flash());

// // Custom flash middleware -- from Ethan Brown's book, 'Web Development with Node & Express'
// app.use(function(req, res, next){
//     // if there's a flash message in the session request, make it available in the response, then delete it
//     res.locals.sessionFlash = req.session.sessionFlash;
//     delete req.session.sessionFlash;
//     next();
// });


// Route that creates a flash message using custom middleware
// router.post('/register', function( req, res ) {
//     req.session.sessionFlash = {
//         type: 'success',
//         message: 'This is a flash message using custom middleware and express-session.'
//     }
//     // res.redirect(301, '/');
//     res.redirect('./login');
// });




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
    //check to see that all fields are filled out
    //=======================================================


    //=======================================================
    //check to see that the passwords match
    //=======================================================
    if(passwordToCheck != password2){
        res.redirect('/error')
    }

    //=======================================================
    //check to see if the email address has already been used
    //=======================================================
    db.user.findAll({where: {email: email}})
    .then((results) => {
        if(results.length > 0){ //is someone has already registered with that address
            res.redirect('/error');
        }
    })


    //store this information inside of a table
    db.user.create({fName: fName, lName:lName, email:email, username:username, password:password, })
    .then((user) => {
        res.redirect('./login');
    })
    .catch((error) => {
        console.log(error);
    })
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