var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('index', {
      pageTitle: 'Home',
      // artwork: pagePhotos,
      // speakers: pageSpeakers,
      pageID: 'home'
    });
});

module.exports = router;
