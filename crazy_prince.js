// SEVER FILE
const express = require('express');
const path = require('path');
const helmet = require('helmet');
const morgan = require('morgan');

const app = express();
const port = process.env.PORT || 0; // Default port set to random for security, you can set your own

// Middleware for security headers
app.use(helmet());

// Middleware for logging HTTP requests
app.use(morgan('combined'));

// Serve static files from the "public/assets" folder
app.use(express.static(path.join(__dirname, 'public', 'assets')));

// Serve the index.html file for the root route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'crazy-md.html'));
});

// Utilisation des middlewares pour les routes spécifiques
app.use('/crazyqr', server);
app.use('/code', code);

// Middleware pour servir pair.html lorsque la route /pair est accédée
app.use('/pair', (req, res, next) => {
    res.sendFile(__path + './pair/pair.html');
});

// Middleware pour servir helps.html lorsque la route /helps est accédée
app.use('/helps', (req, res, next) => {
    res.sendFile(__path + './public/helps.html');
});


// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

// Start the server
const server = app.listen(port, () => {
  const actualPort = server.address().port;
  const url = `http://localhost:${actualPort}`;
  console.log(`Server is running at ${url}`);
});

// Export the app for PM2 clustering
module.exports = app;


// JAVASCRIPT IS SWEET, BROTHERS AND SISTERS ❤️
