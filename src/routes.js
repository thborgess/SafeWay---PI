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
routes.delete('/usinasdelete/:id', UsinaController.delete);
routes.put('/usinasArquitetura/:id', UsinaController.updateRespostaArquitetura);
routes.put('/usinasAcessos/:id', UsinaController.updateRespostaAcessos);
routes.put('/usinasMonitoramento/:id', UsinaController.updateRespostaMonitoramento);
routes.put('/usinasInventario/:id', UsinaController.updateRespostaInventario);
routes.put('/usinasGovernanca/:id', UsinaController.updateRespostaGovernanca);
routes.put('/usinasVulnerabilidade/:id', UsinaController.updateRespostaVulnerabilidade);

routes.put('/usinasPontArq/:id', UsinaController.updatePontArq);
routes.put('/usinasPontAcessos/:id', UsinaController.updatePontAcessos);
routes.put('/usinasPontMonitor/:id', UsinaController.updatePontMonitor);
routes.put('/usinasPontInventario/:id', UsinaController.updatePontInvent);
routes.put('/usinasPontGovern/:id', UsinaController.updatePontGov);
routes.put('/usinasPontVulneral/:id', UsinaController.updatePontVulneral);
routes.put('/usinasPontGeral/:id', UsinaController.updatePontGeral);



routes.post('/acessos', AcessosController.criar);
routes.post('/arquitetura', ArquiteturaController.criar);
routes.get('/arquitetura', ArquiteturaController.list);
routes.post('/arquitetura', GovernancaController.criar);
routes.post('/inventario', InventarioController.criar);
routes.post('/monitoramento', MonitoramentoController.criar);
routes.post('/vulnerabilidade', VulnerabilidadeController.criar);


 module.exports = routes;