const express = require('express');
const connectDB = require('./config/db');
const path = require('path');

// instantiate express server
const app = express();

// connect database
connectDB();

// initialize middleware
// --body-parser
app.use(express.json({ extended: false }));

// define routes

// serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // set static folder
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

// initialize port
const PORT = process.env.PORT || 5000;

// start server
app.listen(PORT, () => {
  console.log(`Server listening @ PORT: ${PORT}`);
});
