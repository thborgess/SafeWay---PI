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
    
    async updateRespostaArquitetura (req, res) {
        try {
            const { id } = req.params;
            const { respostasArquitetura } = req.body;

            await UsinaModel.findByIdAndUpdate(id, req.body);

            return res.status(200).json({ message: "Resposta atualizada" });
        } catch (error) {
            return res.status(404).json({ message: "Erro ao atualizar" });
        }
    }

    async updateRespostaAcessos (req, res) {
        try {
            const { id } = req.params;
            const { respostasAcessos } = req.body;

            await UsinaModel.findByIdAndUpdate(id, req.body);

            return res.status(200).json({ message: "Resposta atualizada" });
        } catch (error) {
            return res.status(404).json({ message: "Erro ao atualizar" });
        }
    }

    async updateRespostaMonitoramento (req, res) {
        try {
            const { id } = req.params;
            const { respostasMonitoramento } = req.body;

            await UsinaModel.findByIdAndUpdate(id, req.body);

            return res.status(200).json({ message: "Resposta atualizada" });
        } catch (error) {
            return res.status(404).json({ message: "Erro ao atualizar" });
        }
    }

    async updateRespostaInventario (req, res) {
        try {
            const { id } = req.params;
            const { respostasInvntario } = req.body;

            await UsinaModel.findByIdAndUpdate(id, req.body);

            return res.status(200).json({ message: "Resposta atualizada" });
        } catch (error) {
            return res.status(404).json({ message: "Erro ao atualizar" });
        }
    }

    async updateRespostaGovernanca(req, res) {
        try {
            const { id } = req.params;
            const { respostasGovernanca } = req.body;

            await UsinaModel.findByIdAndUpdate(id, req.body);

            return res.status(200).json({ message: "Resposta atualizada" });
        } catch (error) {
            return res.status(404).json({ message: "Erro ao atualizar" });
        }
    }

    async updateRespostaVulnerabilidade(req, res) {
        try {
            const { id } = req.params;
            const { respostasMonitoramento } = req.body;

            await UsinaModel.findByIdAndUpdate(id, req.body);

            return res.status(200).json({ message: "Resposta atualizada" });
        } catch (error) {
            return res.status(404).json({ message: "Erro ao atualizar" });
        }
    }



    async updatePontArq(req, res) {
        try {
            const { id } = req.params;
            const { pontuacaoArquitetura } = req.body;

            await UsinaModel.findByIdAndUpdate(id, req.body);

            return res.status(200).json({ message: "Resposta atualizada" });
        } catch (error) {
            return res.status(404).json({ message: "Erro ao atualizar" });
        }
    }

    async updatePontAcessos(req, res) {
        try {
            const { id } = req.params;
            const { pontuacaoAcessos } = req.body;

            await UsinaModel.findByIdAndUpdate(id, req.body);

            return res.status(200).json({ message: "Resposta atualizada" });
        } catch (error) {
            return res.status(404).json({ message: "Erro ao atualizar" });
        }
    }

    async updatePontMonitor(req, res) {
        try {
            const { id } = req.params;
            const { pontuacaoMonitoramento } = req.body;

            await UsinaModel.findByIdAndUpdate(id, req.body);

            return res.status(200).json({ message: "Resposta atualizada" });
        } catch (error) {
            return res.status(404).json({ message: "Erro ao atualizar" });
        }
    }

    async updatePontInvent(req, res) {
        try {
            const { id } = req.params;
            const { pontuacaoInventario } = req.body;

            await UsinaModel.findByIdAndUpdate(id, req.body);

            return res.status(200).json({ message: "Resposta atualizada" });
        } catch (error) {
            return res.status(404).json({ message: "Erro ao atualizar" });
        }
    }

    async updatePontGov(req, res) {
        try {
            const { id } = req.params;
            const { pontuacaoGovernanca } = req.body;

            await UsinaModel.findByIdAndUpdate(id, req.body);

            return res.status(200).json({ message: "Resposta atualizada" });
        } catch (error) {
            return res.status(404).json({ message: "Erro ao atualizar" });
        }
    }

    async updatePontVulneral(req, res) {
        try {
            const { id } = req.params;
            const { pontuacaoVulnerabilidade } = req.body;

            await UsinaModel.findByIdAndUpdate(id, req.body);

            return res.status(200).json({ message: "Resposta atualizada" });
        } catch (error) {
            return res.status(404).json({ message: "Erro ao atualizar" });
        }
    }

    async updatePontGeral(req, res) {
        try {
            const { id } = req.params;
            const { pontuacaoGeral } = req.body;

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

    async delete (req, res) {
        try {
            const { id } = req.params;

            const usinaDeletada = await UsinaModel.findByIdAndDelete(id);

            if (!usinaDeletada) {
                return res.status(404).json({ message: "Usina não existe" });
            }

            return res.status(200).json({ message: "Produto deletado"})
        } catch (error) {
            return res.status(404).json({ message: "Erro ao deletar" });
        }
    }
}

module.exports = new UsinaController();