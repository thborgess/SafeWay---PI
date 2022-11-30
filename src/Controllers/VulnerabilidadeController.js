const VulnerabilidadeModel = require('../Models/VulnerabilidadeModel');

class VulnerabilidadeController {
    async criar(req, res) {
        const criarQuestao = await VulnerabilidadeModel.create(req.body);

        return res.status(200).json(criarQuestao)
    }
}

module.exports = new VulnerabilidadeController();