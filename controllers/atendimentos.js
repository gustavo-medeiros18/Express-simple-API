const Atendimento = require("../models/atendimentos");

module.exports = (app) => {
  const msg = "Você está na rota de atendimentos";

  app.get("/atendimentos", (req, res) => res.send(`${msg} e está realizando uma requisição GET`));
  
  app.post("/atendimentos", (req, res) => {
    const atendimento = req.body;

    Atendimento.adiciona(atendimento, res);
  });
}