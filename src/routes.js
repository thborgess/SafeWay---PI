const { Router } = require('express');

const UsinaController = require('./Controllers/UsinaController');
const AcessosController = require('./Controllers/AcessosController');
const ArquiteturaController = require('./Controllers/ArquiteturaController');
const GovernancaController = require('./Controllers/GovernancaController');
const InventarioController = require('./Controllers/InventarioController');
const MonitoramentoController = require('./Controllers/MonitoramentoController');
const VulnerabilidadeController = require('./Controllers/VulnerabilidadeController');

const routes = Router();

routes.post('/usinas', UsinaController.cadastrar);
routes.get('/usinaslist', UsinaController.list);
routes.get('/usinas/:id', UsinaController.show);
routes.put('/usinas/:id', UsinaController.updateResposta);
routes.post('/acessos', AcessosController.criar);
routes.post('/arquitetura', ArquiteturaController.criar);
routes.post('/arquitetura', GovernancaController.criar);
routes.post('/inventario', InventarioController.criar);
routes.post('/monitoramento', MonitoramentoController.criar);
routes.post('/vulnerabilidade', VulnerabilidadeController.criar);


 module.exports = routes;