const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const UsinaSchema = new Schema({
  UsinaID: ObjectId,
  nomeGestor: String,
  nomeUsina: String,
  endereco: String,
  respostasArquitetura: Array,
  respostasAcessos: Array,
  respostasMonitoramento: Array,
  respostasInventario: Array,
  respostasGovernanca: Array,
  respostasVulnerabilidade: Array,
  pontuacaoArquitetura: Number,
  pontuacaoAcessos: Number,
  pontuacaoMonitoramento: Number,
  pontuacaoInventario: Number,
  pontuacaoGovernanca: Number,
  pontuacaoVulnerabilidade: Number
});

const UsinaModel = mongoose.model('usinas', UsinaSchema);

module.exports = UsinaModel;