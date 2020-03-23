var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('index', {
      pageTitle: 'NABIFREEDOM',
      // artwork: pagePhotos,
      // speakers: pageSpeakers,
      pageID: 'home'
    });
});

module.exports = router;
