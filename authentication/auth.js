let auth = (req, res, next) => {

    //if there session then allow user to see page
    //otherwise redirect user to /login

    if(req.isAuthenticated()){
        return next();
    } else {
        req.flash('error_msg', 'Please log in to view this page');
        res.redirect('/login');
    }

  
}

module.exports = auth;