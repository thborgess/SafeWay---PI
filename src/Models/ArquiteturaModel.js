const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const ArquiteturaSchema = new Schema({
  ID: ObjectId,
  questaoID: Number,
  enunciado: String,
  resposta: Boolean,
  recomendacao: String
});

const ArquiteturaModel = mongoose.model('questoes arquitetura', ArquiteturaSchema);

module.exports = ArquiteturaModel;