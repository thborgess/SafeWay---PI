const GovernancaModel = require('../Models/GovernancaModel');

class GovernancaController {
    async criar(req, res) {
        const criarQuestao = await GovernancaModel.create(req.body);

        return res.status(200).json(criarQuestao)
    }
}

module.exports = new GovernancaController();