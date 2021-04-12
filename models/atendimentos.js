const conexao = require("../infrastructure/conexao.js")

class Atendimento {
  adiciona(atendimento) {
    const dataCriacao = new Date();
    const atendimentoDatado = {...atendimento, dataCriacao};
    const sql = "INSERT INTO Atendimentos SET ?";

    conexao.query(sql, atendimentoDatado, (erro, resultados) => {
      console.log(erro ? `${erro}` : `${resultados}`);
    });
  }
}

module.exports = new Atendimento;