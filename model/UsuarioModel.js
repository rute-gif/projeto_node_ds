const db = require('../config/database');

const criarUsuario = async (
    nome,
    login,
    senha
) => {
    const sql = `INSERT INTO
                  usuario (nome, login, senha)
                 VALUES (?, ?, ?)`;

    const [result] = await db.execute(sql, [nome, login, senha]);  
    return resultado;     
}
