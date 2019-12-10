var express = require('express');
var router = express.Router();
var _ = require('lodash');
var measure = require('../controllers/measure.controller');

/* GET one user */
router.get('/:measureId', (req, res) => {
    measure.findOne(req, res);
    
});


/* DELETE  one user */

router.delete('/:measureId', (req, res) => {
    measure.delete(req, res);
    
});

/* update  one user */
router.post('/:measureId', (req, res) => {
    measure.update(req, res);
    
});

/* create  one user */
router.put('/', (req, res) => {
    measure.create(req, res);
    
});

/* GET users listing. */
router.get('/', (req, res) => {
    measure.findAll(req, res);
    
});

module.exports = router;