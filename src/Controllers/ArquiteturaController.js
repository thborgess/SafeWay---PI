const ArquiteturaModel = require('../Models/ArquiteturaModel');

class ArquiteturaController {
    async criar(req, res) {
        const criarQuestao = await ArquiteturaModel.create(req.body);

        return res.status(200).json(criarQuestao)
    }

    async list (req, res) {
        const perguntas =  await ArquiteturaModel.find();

        return res.status(200).json({ perguntas });
    }

    
}

module.exports = new ArquiteturaController();