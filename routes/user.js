require('dotenv').config();
const router = require('express').Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User } = require('../models/UserModel');

// Routes
router.get('/', (req, res) => {
  User.find({})
    .then(data => {
      console.log('Data: ', data);
      res.json(data);
    })
    .catch(e => {
      console.log('error: ', e);
    });
});

router.post('/signup', (req, res) => {
  // using bcrypt to randomize user credentials
  bcrypt.hash(req.body.password, 10)
    .then(hash => {
      // save user to db
      const user = new User({
        email: req.body.email,
        password: hash
      })
        .save()
        .then(() => {
          res.status(201).json({
            message: 'User added successfully!'
          });
          // log user in
        });
    })
    .catch(e => {
      res.status(400).json({
        error: e
      });
    });
  }
);


router.post('/login', (req, res) => {
  // logs user in
  User.findOne({ email: req.body.email })
    .then(user => {
      // Check if there's no user
      if (!user) return res.status(401).json({ error: new Error('User not found! Perhaps sign up?') });

      // If there is a user, compare the passwords and authenticate
      bcrypt.compare(req.body.password, user.password)
        .then(valid => {
          // Check if password is not valid
          if (!valid) return res.status(401).json({ error: new Error('Password is incorrect!') });

          // Create JWT
          const token = jwt.sign({ userId: user._id }, process.env.AUTH_STRING, { expiresIn: '24hr' } );
          // Authenticate user
          res.status(200).json({
            userId: user._id,
            token
          });
        })
        .catch(e => {
          res.status(500).json({ error: e });
        });
    })
    .catch(e => {
      res.status(500).json({ error: e });
    });
  }
);

module.exports = router;