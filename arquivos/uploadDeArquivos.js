const fs = require("fs");

fs.readFile("./assets/giraffe.jpg", (erro, buffer) => {
  console.log("A imagem foi armazenada no buffer");
  
  fs.writeFile("./assets/giraffe-copy.jpg", buffer, (erro) => {
    console.log("A imagem foi escrita");
  });
});