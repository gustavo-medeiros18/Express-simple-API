const conexao = require("../database/conexao");

class Pet {
  adiciona(pet, res) {
    const sql = "INSERT INTO Pets SET ?";

    conexao.query(sql, pet, (erro, resultado) => {
      if (erro)
        res.status(400).json(erro);
      else
        res.status(201).json(resultado);
    });
  }
}

module.exports = new Pet();