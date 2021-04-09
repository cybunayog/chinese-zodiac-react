const router = require('express').Router();
const auth = require('../middleware/auth');
const { Form } = require('../models/FormModel');


// Make routes for user stuff

//TODO: create a way to create, save, and display test results
router.get('/form', auth, (req, res) => {
  Form.find({})
    .then(data => {
      console.log('Form Data: ', data);
      res.json(data);
    })
    .catch(e => {
      console.log('error: ', e);
    });
});

router.post('/form/submitted', auth, (req, res) => {
  const form = new Form({
    name: req.body.name,
    email: req.body.email,
    q1: req.body.q1,
    q2: req.body.q2,
    q3: req.body.q3,
    q4: req.body.q4,
    q5: req.body.q5,
    q6: req.body.q6,
    q7: req.body.q7,
    q8: req.body.q8,
    q9: req.body.q9,
    q10: req.body.q10,
  })
    .save()
    .then(() => {
      res.status(201).json({
        message: 'Form added successfully!'
      })
    })
    .catch(e => {
      res.status(400).json({
        error: e
      })
    });
});

router.delete('/form/:id', auth, (req, res) => {

});

module.exports = router;