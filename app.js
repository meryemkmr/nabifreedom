const express = require('express');
const session = require('express-session');
const db = require('./models');
const bodyParser = require('body-parser');
const app = express();

let cookieParser = require('cookie-parser');



//EXPRESS BODY PARSER
app.use(bodyParser.urlencoded({extended: false}));


// EXPRESS COOKIES
app.use(cookieParser());

//EXPRESS SESSION
app.use(session({
  secret: 'dog eats cats',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false, maxAge: 14 * 24 * 60 * 60 * 1000 }
  
}));

//SETUP
app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static('public'));


//ROUTES
app.use(require('./routes/'));
app.use(require('./routes/about.js'));
app.use(require('./routes/contact.js'));
app.use(require('./routes/login.js'));
app.use(require('./routes/register.js'));




app.listen(3000, () => {
  console.log('Listening on 3000');
});