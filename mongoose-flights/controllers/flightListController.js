// controllers/flightListController.js
const Flight = require('../models/flight');

// Display a list of all flights
exports.flightList = async (req, res) => {
  try {
    const flights = await Flight.find();
    res.render('flights/new', { flights });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching flights');
  }
};
