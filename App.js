require('dotenv').config();

const express = require('express');
const connectDb = require('./config/db');

const bookRoutes = require('./routes/bookRoutes');
const authorRoutes = require('./routes/authorRoutes');
const studentRoutes = require('./routes/studentRoutes');
const libraryAttendant = require('./routes/libraryAttendantRoutes')

const app = express();

app.use(express.json());


app.use('/api', bookRoutes);
app.use('/api', authorRoutes);
app.use('/api', studentRoutes);
app.use('/api', libraryAttendant);



const PORT = process.env.PORT || 8080;


connectDb()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Database connection failed', err);
  });