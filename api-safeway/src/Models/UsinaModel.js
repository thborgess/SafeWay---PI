const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const UsinaSchema = new Schema({
  UsinaID: ObjectId,
  nomeGestor: String,
  nomeUsina: String,
  endereço: String,
  respostasArquitetura: Array
});

const UsinaModel = mongoose.model('usinas', UsinaSchema);

module.exports = UsinaModel;