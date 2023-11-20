// routes/flights.js
const express = require('express');
const router = express.Router();
const flightListController = require('../controllers/flightListController');
const addFlightController = require('../controllers/flightsController');

// Route to display flights
router.get('/flights', flightListController.flightList);

// Route to display the "Add New Flight" form
router.get('/flights/new', addFlightController.showAddFlightForm);

// Route to handle the form submission and add a new flight
router.post('/flights', addFlightController.addFlight);

module.exports = router;
