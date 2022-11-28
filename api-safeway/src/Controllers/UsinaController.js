const UsinaModel = require('../Models/UsinaModel');

class UsinaController {
    async cadastrar(req, res) {
        const cadastrarUsina = await UsinaModel.create(req.body);

        return res.status(200).json(cadastrarUsina)
    }
}

module.exports = new UsinaController();