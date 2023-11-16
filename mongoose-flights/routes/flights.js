

const express = require('express');
const router = express.Router();
const Flight = require('../models/flight'); // Import the Flight Model

// Route to display flights
router.get('/flights', async (req, res) => {
  try {
    const flights = await Flight.find();
    res.render('flights/index', { flights }); // Pass flights to your view
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching flights');
  }
});

module.exports = router;
