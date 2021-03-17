const router = require('express').Router();
const { User } = require('../models/UserModel.js');

// Routes
router.post('/signup', (req, res) => {
  // save user to db
  const user = new User({
    email: req.body.email,
    password: req.body.password
  }).save((err, res) => {
    if (err) res.status(400).send(err);
    res.status(200).send(response);
  });
});


router.post('/login', (req, res) => {
  // logs user in

});

module.exports = router;