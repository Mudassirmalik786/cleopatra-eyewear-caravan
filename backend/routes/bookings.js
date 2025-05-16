const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');

router.post('/', async (req, res) => {
    const { userId, productId, date } = req.body;
    const booking = new Booking({ userId, productId, date });
    await booking.save();
    res.json({ message: 'Booking created', booking });
});

module.exports = router;