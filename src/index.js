const path = require('path');
const express = require('express');
const Loaders = require('./loaders/index');
const app = express();
const routes = require('./routes');
const port = process.env.PORT || 3000

Loaders.start();

app.use(express.json());
app.use('/api', routes);
app.use('/', express.static(path.join(__dirname, './public')));

app.listen(port, () => console.log('Server rodando'));

module.exports = app;