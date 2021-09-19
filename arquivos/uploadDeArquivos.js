const fs = require("fs");
const path = require("path");

module.exports = (caminho, nomeDoArquivo, callbackImagemCriada) => {
  const tiposValidos = ["jpg", "jpeg", "png"];
  const tipo = path.extname(caminho);

  if (tiposValidos.indexOf(tipo.substring(1)) == -1)
    console.log("Erro! - Formato invalido");
  else {
    const novoCaminho = `./assets/imagens/${nomeDoArquivo}${tipo}`;
  
    fs.createReadStream(caminho)
      .pipe(fs.createWriteStream(novoCaminho))
      .on("finish", () => callbackImagemCriada(novoCaminho));
  }
}