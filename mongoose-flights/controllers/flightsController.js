const Flight = require('../models/flight');
const { body, validationResult } = require('express-validator');

const validationRules = [
    body('airline').notEmpty().isIn(['American', 'Delta', 'United']),
    body('airport').notEmpty().isIn(['LIT', 'DUH', 'FUC', 'UUP', 'MAN']),
    body('flightNo').isInt({ min: 10, max: 9999 }),
    body('departs').isISO8601(), 
];

// Display the "Add New Flight" form
exports.showAddFlightForm = (req, res) => {
    res.render('flights/new'); 
};

// Handle the form submission to add a new flight
exports.addFlight = async (req, res) => {
    // Validate the form inputs
    await Promise.all(validationRules.map((rule) => rule.run(req)));
  
    const errors = validationResult(req);
  
    if (!errors.isEmpty()) {
      // If there are validation errors, render the form again with error messages
      return res.render('flights/new', { errors: errors.array() });
    }
  
    // If validation passes, proceed to save the new flight
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
