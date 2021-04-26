const customExpress = require("./config/customExpress");
const conexao = require("./database/conexao");
const Tabelas = require("./database/tabelas");

conexao.connect((erro) => {
  if (erro)
    console.log(erro);
  else {
    console.log("A conexao deu certo");

    const app = customExpress();
    
    app.listen(3000, () => console.log("Servidor ativo"));
    
    Tabelas.init(conexao);
  } 
});