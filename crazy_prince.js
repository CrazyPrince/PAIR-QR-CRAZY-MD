const express = require('express');
const path = require('path');
const helmet = require('helmet');
const morgan = require('morgan');

const app = express();
const port = process.env.PORT || 10000;

// Définition du répertoire racine du processus en cours
const __path = process.cwd();

// Import des modules crazyqr et pair
const server = require('./crazyqr');
const code = require('./pair');

// Middleware for security headers
app.use(helmet());

// Middleware for logging HTTP requests
app.use(morgan('combined'));

// Serve static files from the "public/assets" folder
app.use(express.static(path.join(__dirname, 'public', 'publics')));

// Serve the index.html file for the root route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'crazy-md.html'));
});

// Utilisation des middlewares pour les routes spécifiques
app.use('/crazyqr', server);
app.use('/code', code);

// Middleware pour servir pair.html lorsque la route /pair est accédée
app.get('/pair', (req, res) => {
    res.sendFile(path.join(__dirname, 'pair', 'pair.html'));
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

// Démarrage du serveur
const serverInstance = app.listen(port, () => {
  const actualPort = serverInstance.address().port;
  console.log(`Server is running at http://localhost:${actualPort}`);
  
  // Terminer le processus une fois le serveur démarré
  process.exit(0);
});

// Export the app for PM2 clustering
module.exports = app;
