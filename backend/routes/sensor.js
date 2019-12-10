var express = require('express');
var router = express.Router();
var _ = require('lodash');
var sensor = require('../controllers/sensor.controller');

/* GET one sensor
router.get('/:sensorId', (req, res) => {
    sensor.findOne(req, res);
    
});


/* DELETE  one sensor
router.delete('/:sensorId', (req, res) => {
    sensor.delete(req, res);
    
});

/* update one sensor
router.post('/:sensorId', (req, res) => {
    sensor.update(req, res);
    
});

/* create one sensor */
router.put('/', (req, res) => {
    sensor.create(req, res);
    
});

/* GET sensor listing. */
router.get('/', (req, res) => {
    sensor.findAll(req, res);
    
});

// Get number of sensors
router.get("/numberSensors", (req, res, result) => {
    sensor.count(req, res, result);
});

module.exports = router;