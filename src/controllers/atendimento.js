const express = require("express");
const routes = express.Router();
const Atendimento = require("../models/atendimento");

routes.get("/", async (req, res) => {
  const atendimentos = await Atendimento.find({});
  res.status(200).send({ atendimentos: atendimentos });
});

routes.post("/", async (req, res) => {
  let { body: atendimento } = req;
  try {
    user = Atendimento.create(atendimento);
  } catch (error) {
    return res.status(401).send({ error });
  }
  return res.status(200).send({ atendimento });
});

module.exports = app => app.use("/api/atendimento", routes);
