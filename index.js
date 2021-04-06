const customExpress = require("./config/customExpress");
const conexao = require("./infrastructure/conexao");

conexao.connect((erro) => {
  if (erro) {
    const app = customExpress;

    app.listen(3000, () => console.log("Servidor ativo"));

    console.log("A conexao deu certo!");
  }
  else
    console.log("Ocorreu um erro na conexao");
});