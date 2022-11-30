const ArquiteturaModel = require('../Models/ArquiteturaModel');

class ArquiteturaController {
    async criar(req, res) {
        const criarQuestao = await ArquiteturaModel.create(req.body);

        return res.status(200).json(criarQuestao)
    }

    
}

module.exports = new ArquiteturaController();