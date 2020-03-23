var express = require('express');
var router = express.Router();

router.get('/about', function(req, res) {
//   var data = req.app.get('appData');
//   var pagePhotos = [];
//   var pageSpeakers = data.speakers;

//   data.speakers.forEach(function(item) {
//     pagePhotos = pagePhotos.concat(item.artwork);
//   });

  res.render('about'
  , {
    pageTitle: 'ABOUT US ',
    
    pageID: 'about'
  }
  );

});

module.exports = router;
