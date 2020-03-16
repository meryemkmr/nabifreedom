var express = require('express');
var router = express.Router();

router.get('/contact', function(req, res) {
//   var data = req.app.get('appData');
//   var pagePhotos = [];
//   var pageSpeakers = data.speakers;

//   data.speakers.forEach(function(item) {
//     pagePhotos = pagePhotos.concat(item.artwork);
//   });

  res.render('contact'
  , {
    pageTitle: 'Contact',
   
    pageID: 'contact'
  }
  );

});

module.exports = router;
