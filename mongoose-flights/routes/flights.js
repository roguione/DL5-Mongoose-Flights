// routes/flights.js
const express = require('express');
const router = express.Router();
const flightListController = require('../controllers/flightListController'); // Import the flightList controller
const addFlightController = require('../controllers/flightsController'); // Import the addFlight controller

// Route to display flights
router.get('/flights', flightListController.flightList);

// Route to handle the form submission and add a new flight
router.post('/flights', addFlightController.addFlight);

module.exports = router;
