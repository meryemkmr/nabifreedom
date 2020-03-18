const express = require('express');
const router = express.Router();
// const bcrypt = require('bcryptjs');
// const passport = require('passport');
// const db = require('../models');
// require('../config/passport');





//LOADING USER MODELS/PROFILES
// const User = require('../models/user')
// const { forwardAuthenticated } = require('../authentication/auth');

//LOGIN PAGE
router.get('/login',  ((req, res) => {
    res.render('login');
}))

//REGISTRATION
router.get('/register',  ((req, res) => {
    res.render('register');
}))

// //REGISTER HANDLE
// router.post('/register', ((req, res) => {
//     // const {fName, lName, email, username, password, password2} = req.body;
//     var fName = req.body.fName;
//     var lName = req.body.lName;
//     var email = req.body.email;
//     var username = req.body.username;
//     let password = req.body.password;
//     var password2 = req.body.password2;
//     let errors = [];
//     let success = [];

//     //CHECK REQUIRED FIELDS
//     if(!fName || !lName || !email || !username || !password || !password2){
//         errors.push({msg: 'Please fill in all fields'})
//     }

//     //CHECK PASSWORDS MATCH
//     if(password != password2) {
//         errors.push({msg: 'Passwords do not match'})
//     }

//     //CHECK PASS LENGTH
//     if(password.length < 8){
//         errors.push({msg: 'Password should at least be 8 characters long'})
//     }

//     //LENGTH OF ARRAY OF ERRORS WILL POP UP ON REGISTRATION
//     if(errors.length > 0){
//         res.render('register', {
//             errors,
//             fName, 
//             lName, 
//             username,
//             email,
//             password,
//             password2
//         });
//     } else {
//         db.user.findOne({where: { email: email }})
//         .then(person =>{
//             if (person) {
//                 errors.push({msg: 'Email already exists'});
//                 res.render('register', {
//                     errors,
//                     fName, 
//                     lName, 
//                     username,
//                     email,
//                     password,
//                     password2
//                 });
//             } else {
//                 let password = bcrypt.hashSync(req.body.password, 8);
//                 db.user.create({fName:fName, lName:lName, username:username, email:email, password:password})    
//                 .then((user) => {
//                     req.flash('success_msg', 'You are now registered and can log in');
//                     res.redirect('/login')
//                 })
//                 .catch((error) => {
//                     res.send(error)
//                 })
                
//             }
//         });
//     }
// }));

// //LOGIN
// router.post('/login',
//     passport.authenticate('local', { //USING THE LOCAL STRATEGY
//       successRedirect: '/adoption', //ON SUCCESS REDIRECT TO /DASHBOARD
//       failureRedirect: '/login', //ON FAILURE STAY OR GO TO LOGIN BASICALLY
//       failureFlash: true //SHOW FLASH MESSAGE ON FAILURE
//     }) //DOCUMENTATION 
// );
  

//   //LOGOUT
//   router.get('/logout', (req, res) => {
//     req.logout();
//     req.flash('success_msg', 'You are logged out');
//     res.redirect('/login');
//   });



module.exports = router;