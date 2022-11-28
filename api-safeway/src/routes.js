const { Router } = require('express');

const UsinaController = require('./Controllers/UsinaController');

const routes = Router();

routes.get('/health', (req, res) => {
    return res.status(200).json({message: "Server rodando..."});
});

routes.post('/usinas', UsinaController.cadastrar);

 module.exports = routes;