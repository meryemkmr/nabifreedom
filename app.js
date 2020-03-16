const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(express.static('public'));

app.use(require('./routes/'));
app.use(require('./routes/about.js'));
app.use(require('./routes/contact.js'));




app.listen(3000, () => {
  console.log('Listening on 3000');
});