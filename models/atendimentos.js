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

  lista(res) {
    const sql = "SELECT * FROM `agenda-petshop`.`Atendimentos`;"

    conexao.query(sql, (erro, resultado) => {
      if (erro)
        res.status(500).json(erro);
      else
        res.status(200).json(resultado);
    });
  }

  buscaPorID(id, res) {
    const sql = `SELECT * FROM Atendimentos WHERE id = ${id};`;

    conexao.query(sql, (erro, resultado) => {
      const atendimento = resultado[0];

      if (erro)
        res.status(400).json(erro);
      else
        res.status(200).json(atendimento);
    });
  }

  altera(id, valores, res) {
    const sql = `UPDATE Atendimentos SET ? WHERE id = ?;`; 

    valores.data = moment(valores.data, "DD/MM/YYYY").format("YYYY-MM-DD HH:MM:SS");

    conexao.query(sql, [valores, id], (erro, resultados) => {
      if (erro)
        res.status(400).json(erro);
      else
        res.status(200).json({...valores, id});
    });
  }

  deleta(id, res) {
    const sql = "DELETE FROM Atendimentos WHERE id = ?;"

    conexao.query(sql, id, (erro, resultados) => {
      if (erro)
        res.status(400).json(erro);
      else
        res.status(200).json({id});
    });
  }
}

module.exports = new Atendimento;