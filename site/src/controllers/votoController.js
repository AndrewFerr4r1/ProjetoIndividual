var votoModel = require("../models/votoModel");

var sessoes = [];

function testar(req, res) {
    console.log("ENTRAMOS NA usuarioController");
    res.json("ESTAMOS FUNCIONANDO!");
}

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var voto = req.body.votoServer;
    var idUsuario = req.body.idUsuarioServer;

    // Faça as validações dos valores
    if (voto == undefined) {
        res.status(400).send("Seu voto está undefined!");
    } else if(idUsuario == undefined) {
        res.status(400).send("Seu id do usuario está undefined!")
    }else {
        
        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        votoModel.cadastrar(voto, idUsuario)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    cadastrar,
    testar
}