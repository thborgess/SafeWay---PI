const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const InventarioSchema = new Schema({
  ID: ObjectId,
  questaoID: Number,
  enunciado: String,
  resposta: Boolean,
  recomendacao: String
});

const InventarioModel = mongoose.model('questoes inventario', InventarioSchema);

module.exports = InventarioModel;