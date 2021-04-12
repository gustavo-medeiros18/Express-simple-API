const moment = require("moment");
const conexao = require("../infrastructure/conexao.js");

class Atendimento {
  adiciona(atendimento) {
    atendimento.dataCriacao = moment().format("YYYY-MM-DD HH:MM:SS");
    atendimento.data = moment(atendimento.data, "DD/MM/YYYY").format("YYYY-MM-DD HH:MM:SS");

    const sql = "INSERT INTO Atendimentos SET ?";

    conexao.query(sql, atendimento, (erro, resultados) => {
      console.log(erro ? `${erro}` : `${resultados}`);
    });
  }
}

module.exports = new Atendimento;