const customExpress = require("./config/customExpress");
const conexao = require("./infrastructure/conexao");
const Tabelas = require("./infrastructure/tabelas");
const Atendimento = require("./models/atendimentos")

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