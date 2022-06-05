var pegandoIdDoUsuario = sessionStorage.ID_USUARIO
console.log(pegandoIdDoUsuario)

function confirmarVoto() {
    var votoVar = document.getElementById('selectVoto').value
    console.log(votoVar)

    listaVoto = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]

    var fkVoto = 0

    for (posicao = 0; posicao <= listaVoto.length; posicao++) {
        if (posicao == votoVar) {
            fkVoto = listaVoto[posicao]
            console.log(fkVoto)
        }
        if(fkVoto == 1) {
            var votoEscolhido = 'Brasil'
        }else if(fkVoto == 2) {
            var votoEscolhido = 'Canada'
        }else if(fkVoto == 3) {
            var votoEscolhido = 'Argentina'
        }else if(fkVoto == 4) {
            var votoEscolhido = 'Eua'
        }else if(fkVoto == 5) {
            var votoEscolhido = 'Australia'
        }else if(fkVoto == 6) {
            var votoEscolhido = 'China'
        }else if(fkVoto == 7) {
            var votoEscolhido = 'Finlandia'
        }else if(fkVoto == 8) {
            var votoEscolhido = 'Alemanha'
        }else if(fkVoto == 9) {
            var votoEscolhido = 'Indonesia'
        }else if(fkVoto == 10) {
            var votoEscolhido = 'Japão'
        }else if(fkVoto == 11) {
            var votoEscolhido = 'Coreia do sul'
        }else if(fkVoto == 12) {
            var votoEscolhido = 'Tailândia'
        }else if(fkVoto == 13) {
            var votoEscolhido = 'Turquia'
        }else if(fkVoto == 14) {
            var votoEscolhido = 'Inglaterra'
        }else if(fkVoto == 15) {
            var votoEscolhido = 'Vietnam'
        }else {
            var votoEscolhido = 'chinese taipe'
        }
    }
    if (votoVar == null) {
        console.log('não esta vindo nenhum voto!')
    } else {
        fetch("/voto/cadastrar", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                votoServer: fkVoto,
                idUsuarioServer: pegandoIdDoUsuario
            })
        })
        const usuario = {
            voto: votoEscolhido 
        };
        sessionStorage.VOTO_USUARIO = usuario.voto;
    }
    window.location = 'dashboard.html'
}

function limparSessao() {
    sessionStorage.clear();
    window.location = "../index.html";
}

