const db = require("../config/database");

const criarUsuario = async (
    nome,
    email,
    telefone,
    cep,
    endereco,
    numero,
    complemento,
    bairro,
    cidade,
    estado,
    login,
    senha
) => {


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
