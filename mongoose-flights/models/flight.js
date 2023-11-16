

const mongoose = require('mongoose');

const flightSchema = new mongoose.Schema({
  airline: {
    type: String,
    enum: ['American', 'Delta', 'United'],
    required: true,
  },

  airport: {
    type: String,
    enum: ['LIT', 'DUH', 'FUC', 'UUP', 'MAN'],
    default: 'HEL',
  },

  flightNo: {
    type: Number,
    required: true,
    min: 10,
    max: 9999,
  },

  departs: {
    type: Date,
    default: () => {
      const oneYearFromNow = new Date();
      oneYearFromNow.setFullYear(oneYearFromNow.getFullYear() + 1);
      return oneYearFromNow;
    },
  },
});

const Flight = mongoose.model('Flight', flightSchema);

module.exports = Flight;
