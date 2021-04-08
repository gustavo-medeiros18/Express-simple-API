const customExpress = require("./config/customExpress");
const conexao = require("./infrastructure/conexao");
const tabelas = require("./infrastructure/tabelas");

conexao.connect((erro) => {
  if (erro)
    console.log(erro);
  else {
    const app = customExpress;

    app.listen(3000, () => console.log("Servidor ativo"));

    console.log("A conexao deu certo!");
  } 
});

tabelas.init(conexao);