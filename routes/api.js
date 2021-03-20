const router = require('express').Router();
const auth = require('../middleware/auth');

// Make routes for user stuff

//TODO: create a way to create, save, and display test results
router.get('/', auth, (req, res) => {

});

router.post('/', auth, (req, res) => {

})

router.delete('/:id', auth, (req, res) => {

})

module.exports = router;