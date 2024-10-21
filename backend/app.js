const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

const blogRoutes = require('./routes/blogRoutes');
const projectRoutes = require('./routes/projectRoutes');
const recommendationRoutes = require('./routes/recommendationRoutes');
const skillRoutes = require('./routes/skillRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(morgan('combined'));

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// Define a root route
app.get('/', (req, res) => {
    res.send('Welcome to the Portfolio API!');
});

// Routes
app.use('/api/blogs', blogRoutes);
app.use('/api/project', projectRoutes);
app.use('/api/recommendations', recommendationRoutes);
app.use('/api/skills', skillRoutes);

// Start the server
const port = 9000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
