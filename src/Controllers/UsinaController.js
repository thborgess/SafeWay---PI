const UsinaModel = require('../Models/UsinaModel');
const bodyParser = require('body-parser');

class UsinaController {
    async cadastrar(req, res) {
        const nomeUsina = req.body.nomeUsina;
        console.log(nomeUsina)

        const usinaJaExiste = await UsinaModel.findOne({ nomeUsina });

        const cadastrarUsina = await UsinaModel.create(req.body);
        
        if (usinaJaExiste) {
            return res.status(400).json({ message: "Usina já existente"})
        } else {
            return res.status(200).json(cadastrarUsina)
        }  
        
    }
    
    async show(req, res) {
        try {
            const { id } = req.params;

            const usina = await UsinaModel.findById(id);

            if (!usina) {
                return res.status(404).json({ message: "Usina não existente"})
            } else {
                return res.status(200).json(usina);
            }
        } catch (err) { 
            return res.status(404).json({ message: "ID errada"})
        }
    }
    
    async updateResposta (req, res) {
        try {
            const { id } = req.params;
            const { respostasArquitetura } = req.body;

            await UsinaModel.findByIdAndUpdate(id, req.body);

            return res.status(200).json({ message: "Resposta atualizada" });
        } catch (error) {
            return res.status(404).json({ message: "Erro ao atualizar" });
        }
    }

    async list (req, res) {
        const usinas =  await UsinaModel.find();

        return res.status(200).json({ usinas });
    }
}

module.exports = new UsinaController();