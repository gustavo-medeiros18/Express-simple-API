const customExpress = require("./config/customExpress");
const conexao = require("./database/conexao");
const Tabelas = require("./database/tabelas");

conexao.connect((erro) => {
  if (erro)
    console.log(erro);
  else {
    const app = customExpress();
    
    app.listen(3000, () => console.log("Servidor ativo na porta 3000"));
    
    Tabelas.init(conexao);
  } 
});