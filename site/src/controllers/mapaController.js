var mapaModel = require("../models/mapaModel");

var sessoes = [];

function testar(req, res) {
    console.log("ENTRAMOS NA usuarioController");
    res.json("ESTAMOS FUNCIONANDO!");
}

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var mapa = req.body.mapaServer;
    var idUsuario = req.body.idUsuarioServer;

    // Faça as validações dos valores
    if (mapa == undefined) {
        res.status(400).send("Seu mapa está undefined!");
    }else if (idUsuario == undefined) {
        res.status(400).send("Seu usuario está undefined!");
    } else {
        
        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        mapaModel.cadastrar(mapa, idUsuario)
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

function puxarQuantidadeMapasFavoritos(req, res) {
    mapaModel.puxarQuantidadeMapasFavoritos()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

module.exports = {
    cadastrar,
    testar,
    puxarQuantidadeMapasFavoritos
}