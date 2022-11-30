const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const MonitoramentoSchema = new Schema({
  ID: ObjectId,
  questaoID: Number,
  enunciado: String,
  resposta: Boolean,
  recomendacao: String
});

const MonitoramentoModel = mongoose.model('questoes governanca', MonitoramentoSchema);

module.exports = MonitoramentoModel;