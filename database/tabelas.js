class tabelas {
  #conexao;

  init(conexao) {
    this.#conexao = conexao;
    this.criarAtendimentos();
  }

  criarAtendimentos() {
    const sql = "CREATE TABLE IF NOT EXISTS `Atendimentos` (`id` INT NOT NULL,`cliente` VARCHAR(50) NOT NULL,`pet` VARCHAR(20) NOT NULL,`servico` VARCHAR(20) NOT NULL,`data` DATETIME NOT NULL, `dataCriacao` DATETIME NOT NULL, `status` VARCHAR(20) NOT NULL, `observacoes` TEXT NOT NULL, PRIMARY KEY (`id`));"

    this.#conexao.query(sql, (erro) => {
      console.log(erro ? `${erro}` : "Tabela de atendimentos criada com sucesso");
    });
  }
}

module.exports = new tabelas;