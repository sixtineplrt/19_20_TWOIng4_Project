const Sensor = require('../models/sensor.model.js');

// Create and Save a new User
exports.create = (req, res) => {
  // Validate request
  if ((!req.body.creationDate) || (!req.body.location)) {
    // If firstName is not present in body reject the request by
    // sending the appropriate http code
    return res.status(400).send({
      message: 'A file is empty !'
    });
  }

  // Create a new Sensor
  const sensor = new Sensor({
    creationDate: req.body.creationDate,
    location: req.body.location
  });

  // Save Sensor in the database
  sensor
    .save()
    .then(data => {
      // we wait for insertion to be complete and we send the newly user integrated
      res.send(data);
    })
    .catch(err => {
      // In case of error during insertion of a new user in database we send an
      // appropriate message
      res.status(500).send({
        message: err.message || 'Some error occurred while creating the Sensor.'
      });
    });
};

// Retrieve and return all sensors from the database.
exports.findAll = (req, res) => {
  Sensor.find()
    .then(sensor => {
      res.send(sensor);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving sensor.'
      });
    });
};

// sensors number
exports.count = (req, res, result) => {
  Sensor.count({}, function(err, result) {
    if (err) {
      console.log(err);
    } else {
      res.status(200).json(result);
    }
  });
};

// Find a single User with a UserId
exports.findOne = (req, res) => {
  Sensor.findById(req.params.sensorId)
    .then(sensor => {
      if (!sensor) {
        return res.status(404).send({
          message: 'Sensor not found with id ' + req.params.sensorId
        });
      }
      res.send(sensor);
    })
    .catch(err => {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({
          message: 'Sensor not found with id ' + req.params.sensorId
        });
      }
      return res.status(500).send({
        message: 'Error retrieving sensor with id ' + req.params.sensorId
      });
    });
};

// Update a Sensor identified by the UserId in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body.sensorId) {
    return res.status(400).send({
      message: 'Id can not be empty'
    });
  }

  // Find user and update it with the request body
  User.findByIdAndUpdate(
    req.params.sensorId,
    {
      creationDate: req.body.creationDate,
      location: req.body.location
    },
    { new: true }
  )
    .then(sensor => {
      if (!sensor) {
        return res.status(404).send({
          message: 'Sensor not found with id ' + req.params.sensorId
        });
      }
      res.send(sensor);
    })
    .catch(err => {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({
          message: 'Sensor not found with id ' + req.params.sensorId
        });
      }
      return res.status(500).send({
        message: 'Error updating sensor with id ' + req.params.sensorId
      });
    });
};

// Delete a User with the specified UserId in the request
exports.delete = (req, res) => {
  Sensor.findByIdAndRemove(req.params.sensorId)
    .then(sensor => {
      if (!sensor) {
        return res.status(404).send({
          message: 'Sensor not found with id ' + req.params.sensorId
        });
      }
      res.send({ message: 'Sensor deleted successfully!' });
    })
    .catch(err => {
      if (err.kind === 'ObjectId' || err.name === 'NotFound') {
        return res.status(404).send({
          message: 'Sensor not found with id ' + req.params.sensorId
        });
      }
      return res.status(500).send({
        message: 'Could not delete sensor with id ' + req.params.sensorId
      });
    });
};