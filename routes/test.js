const router = require('express').Router();
const auth = require('../middleware/auth');
const { Test } = require('../models/TestModel');

router.get("/", auth, (req, res) => {
  Test.find({})
    .then(data => {
      console.log('Test data: ', data);
      res.json(data);
    })
    .catch(e => {
      console.log(e);
      res.status(404).json(e);
    })
});

router.post("/", auth, (req, res) => {
  const testUser = new Test({
    name: req.body.name
  })
    .save()
    .then(() => {
      res.status(200).json({
        message: 'Name inputted!'
      });
    })
    .catch(e => {
      console.log(e);
      res.status(404).json(e);
    });
});

module.exports = router;