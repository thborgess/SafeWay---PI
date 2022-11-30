const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const AcessosSchema = new Schema({
  ID: ObjectId,
  questaoID: Number,
  enunciado: String,
  resposta: Boolean,
  recomendacao: String
});

const AcessosModel = mongoose.model('questoes acessos', AcessosSchema);

module.exports = AcessosModel;