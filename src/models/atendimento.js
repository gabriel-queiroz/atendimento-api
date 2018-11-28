const mongoose = require("../database");

const AtendimentoSchema = new mongoose.Schema({
  tipo: {
    type: String,
    required: true,
    uppercase: true
  },
  terminal: {
    type: String,
    required: true
  },
  password: {
    type: Number,
    required: true
  }
});

const atendimento = mongoose.model("atendimento", AtendimentoSchema);
module.exports = atendimento;
