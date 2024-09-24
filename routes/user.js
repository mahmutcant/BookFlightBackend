const express = require('express');
const protect = require('../middleware/auth');
const router = express.Router();

router.get('/profile', protect, (req, res) => {
  res.json({ data: req.user.data });
});

router.post('/profile', protect, async (req, res) => {
  try {
    req.user.data = req.body.data;
    await req.user.save();
    res.json({ message: 'Data updated successfully' });
  } catch (error) {
    res.status(400).json({ error: 'Update failed' });
  }
});

router.post('/flights', protect, async (req, res) => {
  const { flightDirection, prefixICAO, scheduleTime, route } = req.body;

  try {
    const flight = { flightDirection, prefixICAO, scheduleTime, route };
    req.user.flights.push(flight);
    await req.user.save();

    res.json({ message: 'Flight added successfully', flights: req.user.flights });
  } catch (error) {
    res.status(400).json({ error: 'Failed to add flight' });
  }
});

router.get('/flights', protect, async (req, res) => {
  try {
    res.json({ flights: req.user.flights });
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve flights' });
  }
});

module.exports = router;