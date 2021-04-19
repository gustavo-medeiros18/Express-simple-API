const moment = require("moment");
const conexao = require("../infrastructure/conexao.js");

class Atendimento {
  adiciona(atendimento, res) {
    const dataCriacao = moment().format("YYYY-MM-DD HH:MM:SS");
    atendimento.data = moment(atendimento.data, "DD/MM/YYYY").format("YYYY-MM-DD HH:MM:SS");

    const dataEhValida = moment(atendimento.data).isSameOrAfter(atendimento.dataCriacao);
    const clienteEhValido = atendimento.cliente.length >= 5;

    const validacoes = [
      {
        nome: "data",
        valido: dataEhValida,
        mensagem: "A data deve ser igual ou posterior a data atual"
      },
      {
        nome: "cliente",
        valido: clienteEhValido,
        mensagem: "O nome do cliente deve possuir no minimo 5 caracteres"
      }
    ]

    const erros = validacoes.filter(campo => !campo.valido);
    const existemErros = erros.length;

    if (existemErros)
      res.status(400).json(erros);
    else {
      const atendimentoDatado = { ...atendimento, dataCriacao};
      const sql = "INSERT INTO Atendimentos SET ?";

      conexao.query(sql, atendimentoDatado, (erro, resultado) => {
        if (erro)
          res.status(400).json(erro);
        else
          res.status(201).json(resultado);
      });
    }
  }
}

module.exports = new Atendimento;