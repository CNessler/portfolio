var express = require('express');
var router = express.Router();
var sendgrid  = require('sendgrid')(process.env.SENDGRID);


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/contact', function (req, res, next) {
  res.render('contact');
})

router.get('/SendGrid', function (req, res, next) {
  res.render('SendGrid')
})
// sendgrid.send(payload, function(err, json) {
//   if (err) { console.error(err); }
//   console.log(json);
// });

module.exports = router;
