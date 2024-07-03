const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 8000;

console.log('✅Server Started...')
// Définition du répertoire racine du processus en cours
__path = process.cwd();

// Import des modules crazyqr et pair
let server = require('./crazyqr'),
    code = require('./pair');

// Configuration pour éviter les erreurs d'événements liées aux écouteurs d'événements
require('events').EventEmitter.defaultMaxListeners = 500;

// Utilisation des middlewares pour les routes spécifiques
app.use('/crazyqr', server);
app.use('/code', code);

// Middleware pour servir pair.html lorsque la route /pair est accédée
app.use('/pair', (req, res, next) => {
    res.sendFile(__path + './pair/pair.html');
});

// Middleware pour servir crazy-md.html lorsque la route / est accédée (route par défaut)
app.use('/', (req, res, next) => {
    res.sendFile(__path + './public/crazy-md.html');
});

// Middleware pour servir helps.html lorsque la route /helps est accédée
app.use('/helps', (req, res, next) => {
    res.sendFile(__path + './public/helps.html');
});

// Middleware pour parser les données JSON et les données de formulaire
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Démarrage du serveur Express
app.listen(PORT, () => {
    console.log(`
Don't Forget To Give Star
@CrazyPrince
Server running on http://localhost:` + PORT);
});

module.exports = app;
