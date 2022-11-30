const UsinaModel = require('../Models/UsinaModel');
const bodyParser = require('body-parser');

class UsinaController {
    async cadastrar(req, res) {
        const nomeUsina = req.body.nomeUsina;

        const usinaJaExiste = await UsinaModel.findOne({ nomeUsina });

        const cadastrarUsina = await UsinaModel.create(req.body);
        
        if (usinaJaExiste) {
            return res.status(400).json({ message: "Usina já existente"})
        } else {
            return res.status(200).json(cadastrarUsina)
        }   
    }


}

module.exports = new UsinaController();