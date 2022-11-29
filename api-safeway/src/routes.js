const { Router } = require('express');

const UsinaController = require('./Controllers/UsinaController');
const AcessosController = require('./Controllers/AcessosController');
const ArquiteturaController = require('./Controllers/ArquiteturaController');
const GovernancaController = require('./Controllers/GovernancaController');
const InventarioController = require('./Controllers/InventarioController');
const MonitoramentoController = require('./Controllers/MonitoramentoController');
const VulnerabilidadeController = require('./Controllers/VulnerabilidadeController');

const routes = Router();

routes.get('/health', (req, res) => {
    return res.status(200).json({message: "Server rodando..."});
});

routes.post('/usinas', UsinaController.cadastrar);
routes.post('/acessos', AcessosController.criar);
routes.post('/arquitetura', ArquiteturaController.criar);
routes.post('/governanca', GovernancaController.criar);
routes.post('/inventario', InventarioController.criar);
routes.post('/monitoramento', MonitoramentoController.criar);
routes.post('/vulnerabilidade', VulnerabilidadeController.criar);


 module.exports = routes;