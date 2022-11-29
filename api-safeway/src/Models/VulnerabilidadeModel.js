const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const VulnerabilidadeSchema = new Schema({
  ID: ObjectId,
  questaoID: Number,
  enunciado: String,
  resposta: Boolean,
  recomendacao: String
});

const VulnerabilidadeModel = mongoose.model('questoes governanca', VulnerabilidadeSchema);

module.exports = VulnerabilidadeModel;