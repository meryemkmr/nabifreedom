const express = require('express');
const session = require('express-session');
const db = require('./models');

const bodyParser = require('body-parser');
const app = express();



//EXPRESS BODY PARSER
app.use(bodyParser.urlencoded({extended: false}));

//EXPRESS SESSION


//SETUP
app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static('public'));


//ROUTES
app.use(require('./routes/'));
app.use(require('./routes/about.js'));
app.use(require('./routes/contact.js'));
app.use(require('./routes/login.js'))




app.listen(3000, () => {
  console.log('Listening on 3000');
});