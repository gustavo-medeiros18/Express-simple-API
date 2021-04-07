const customExpress = require("./config/customExpress");
const conexao = require("./infrastructure/conexao");

conexao.connect((erro) => {
  if (erro)
    console.log("Ocorreu um erro na conexao");
  else {
    const app = customExpress;

    app.listen(3000, () => console.log("Servidor ativo"));

    console.log("A conexao deu certo!");
  } 
});