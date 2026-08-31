require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

// Database and Kafka imports
const connectDB = require('./config/db');
const { connectKafka } = require('./config/kafka');

const telemetryRoutes = require('./routes/telemetry');
const catalogRoutes = require('./routes/catalog');
const recommendationRoutes = require('./routes/recommendation');

const app = express();

// Initialize connections
connectDB();
connectKafka();

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Routes
app.use('/api/telemetry', telemetryRoutes);
app.use('/api/products', catalogRoutes);
app.use('/api/recommendations', recommendationRoutes);

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'E-Commerce Clickstream Backend API is Running',
    endpoints: {
      health: '/health',
      catalog: '/api/products',
      telemetry: '/api/telemetry',
      recommendations: '/api/recommendations'
    }
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`[Server] Express server running on port ${PORT}`);
});