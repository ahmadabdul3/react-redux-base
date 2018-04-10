var express = require('express');
var router = express.Router();
var path = require('path');

router.get('/cover', (req, res) => {
  res.render(path.resolve(path.join(__dirname, '../views/cover.html')));
});

// send all requests to index.html so browserHistory in React Router works
router.get('*', (req, res) => {
  res.render(path.resolve(path.join(__dirname, '../views/index.jade')));
});


module.exports = router;
