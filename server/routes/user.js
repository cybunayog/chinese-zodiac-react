const router = require('express').Router();
const moment = require('moment');
const { users } = require('../models.js');

router.get("/signup", (req, res) => {
  // gets sign up page
  res.sendFile();
});

router.post("/signup", (req, res) => {
  // save user

});

router.get('/login', (req, res) => {
  // gets login page

});

router.post("/login", (req, res) => {
  // logs user in

});