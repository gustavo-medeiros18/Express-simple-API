const moment = require("moment");
const conexao = require("../infrastructure/conexao.js");

class Atendimento {
  adiciona(atendimento, res) {
    atendimento.dataCriacao = moment().format("YYYY-MM-DD HH:MM:SS");
    atendimento.data = moment(atendimento.data, "DD/MM/YYYY").format("YYYY-MM-DD HH:MM:SS");

    const sql = "INSERT INTO Atendimentos SET ?";

    conexao.query(sql, atendimento, (erro, resultado) => {
      if (erro)
        res.status(400).json(erro);
      else
        res.status(201).json(resultado);
    });
  }
}

module.exports = new Atendimento;