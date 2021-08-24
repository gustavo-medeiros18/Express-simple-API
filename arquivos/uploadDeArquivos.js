const fs = require("fs");

fs.createReadStream("./assets/giraffe.jpg").pipe(fs.createWriteStream("./assets/giraffe-copy-stream.jpg")).on("finish", () => console.log("A imagem foi lida e escrita atraves de streaming com exito"));