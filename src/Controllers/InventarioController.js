const InventarioModel = require('../Models/InventarioModel');

class InventarioController {
    async criar(req, res) {
        const criarQuestao = await InventarioModel.create(req.body);

        return res.status(200).json(criarQuestao)
    }
}

module.exports = new InventarioController();