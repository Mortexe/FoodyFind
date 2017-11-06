const express = require('express');
const router = express.Router();

// Do work here
router.get('/', (req, res) => {
  res.render('hello', {
    name: 'paris',
    age: 21
  });
});

module.exports = router;
