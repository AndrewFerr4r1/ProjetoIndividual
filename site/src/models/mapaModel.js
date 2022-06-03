var database = require("../database/config")

function cadastrar(mapa) {
    console.log("ACESSEI O Mapa MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", mapa);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        update usuario set fkMapa = ${mapa} where idUsuario = 1;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function puxarQuantidadeMapasFavoritos() {
    console.log("ACESSEI O Mapa MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():");
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
    select m.nomeMapa as mapa, count(u.fkMapa) as qtdMapa from usuario u join mapa m
    on u.fkMapa = m.idMapa group by m.nomeMapa;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    cadastrar,
    puxarQuantidadeMapasFavoritos
};