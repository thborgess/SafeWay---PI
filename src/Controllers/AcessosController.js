const AcessosModel = require('../Models/AcessosModel');

class AcessosController {
    async criar(req, res) {
        const criarQuestao = await AcessosModel.create(req.body);

        return res.status(200).json(criarQuestao)
    }
}

module.exports = new AcessosController();