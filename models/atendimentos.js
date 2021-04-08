const conexao = require("../infrastructure/conexao.js")

class Atendimento {
  adiciona(atendimento) {
    const sql = "INSERT INTO Atendimentos SET ?";

    conexao.query(sql, atendimento, (erro, resultados) => {
      console.log(erro ? `${erro}` : `${resultados}`);
    });
  }
}

module.exports = new Atendimento;