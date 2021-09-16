const conexao = require("../database/conexao");
const uploadDeArquivo = require("../arquivos/uploadDeArquivos");

class Pet {
  adiciona(pet, res) {
    const sql = "INSERT INTO Pets SET ?";
    
    uploadDeArquivo(pet.imagem, pet.nome, (novoCaminho) => {
      const novoPet = {nome: pet.nome, imagem: novoCaminho};

      conexao.query(sql, novoPet, (erro, resultado) => {
        if (erro)
          res.status(400).json(erro);
        else
          res.status(200).json(resultado);
      });
    });
  }
}

module.exports = new Pet();