const path = require('path');
const express = require('express');
const Loaders = require('./loaders/index');
const app = express();
const routes = require('./routes');

Loaders.start();

app.use(express.json());
app.use('/api', routes);
app.use('/', express.static(path.join(__dirname, './public')));

app.listen(3000, () => console.log('Server rodando'));

module.exports = app;