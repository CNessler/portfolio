var express = require('express');
var router = express.Router();
var sendgrid  = require('sendgrid')(sendgrid_api_key);


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/contact', function (req, res, next) {
  res.render('contact');
})

sendgrid.send(payload, function(err, json) {
  if (err) { console.error(err); }
  console.log(json);
});

module.exports = router;
