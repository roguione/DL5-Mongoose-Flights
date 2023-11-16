const Flight = require('../models/flight');

// Display the "Add New Flight" form
exports.showAddFlightForm = (req, res) => {
  res.render('flights/');
};

// Handle the form submission to add a new flight
exports.addFlight = async (req, res) => {
  const { airline, airport, flightNo, departs } = req.body;
  try {
    // Create a new flight document and save it to the database
    const newFlight = new Flight({ airline, airport, flightNo, departs });
    await newFlight.save();
    res.redirect('/flights'); // Redirect to the flight listing page
  } catch (error) {
    console.error(error);
    res.status(500).send('Error adding flight');
  }
};
