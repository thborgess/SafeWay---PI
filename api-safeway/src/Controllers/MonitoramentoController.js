const MonitoramentoModel = require('../Models/MonitoramentoModel');

class MonitoramentoController {
    async criar(req, res) {
        const criarQuestao = await MonitoramentoModel.create(req.body);

        return res.status(200).json(criarQuestao)
    }
}

module.exports = new MonitoramentoController();