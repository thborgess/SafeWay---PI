const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const GovernancaSchema = new Schema({
  ID: ObjectId,
  questaoID: Number,
  enunciado: String,
  resposta: Boolean,
  recomendacao: String
});

const GovernancaModel = mongoose.model('questoes governanca', GovernancaSchema);

module.exports = GovernancaModel;