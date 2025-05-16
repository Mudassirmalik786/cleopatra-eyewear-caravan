const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const productRoutes = require('./routes/products');
const bookingRoutes = require('./routes/bookings');
const authRoutes = require('./routes/auth');
const stripeRoutes = require('./routes/stripe');

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.error(err));

app.use('/api/products', productRoutes);
app.use('/api/bookings', bookingRoutes);
app.use('/api/login', authRoutes);
app.use('/api/checkout', stripeRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));