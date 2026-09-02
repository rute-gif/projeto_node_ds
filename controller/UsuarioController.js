const bcrypt = require("bcrypt");

const usuarioModel = require("../model/UsuariosModel");

const criarUsuario = async (req, res) => {
    try{
        const {
                nome,
                login,
                senha
        } = req.body;

        const senhaSecreta = await bcrypt.hash(senha);

        await usuarioModel.criarUsuario(
              nome,
              login,
              senhaSecreta
        );
        res.status(201).json({
            mensagem:"Usuario criado com sucesso!"
        })

    }catch (erro) { 
        res.status(502).json({
            mensagem:"Erro ao cadastrar o usuario!"
        })
        
    }
}
