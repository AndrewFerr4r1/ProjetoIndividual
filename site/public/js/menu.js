var listaMapa = [0, 1, 2, 3, 4, 5]

voto = sessionStorage.VOTO_USUARIO
email = sessionStorage.EMAIL_USUARIO
mapa = sessionStorage.MAPA_USUARIO
nome = sessionStorage.NOME_USUARIO
idUsuario = sessionStorage.ID_USUARIO

if(mapa == 'null') {
    mapa = ''
}

if(voto == 'null') {
    voto = ''
}

function mostrarPerfil() {

    if(voto != undefined) {
        listarPerfil.innerHTML = `<div class="perfil">
                                    <h1>Nome: ${nome}</h1>
                                    <h1>Email: ${email}</h1>
                                    <h1>Voto: ${voto}</h1>
                                    <h1>Mapa preferido:</h1>
                              </div>`
    }if(mapa != undefined) {
        listarPerfil.innerHTML = `<div class="perfil">
                                        <h1>Nome: ${nome}</h1>
                                        <h1>Email: ${email}</h1>
                                        <h1>Voto: ${voto}</h1>
                                        <h1>Mapa preferido: ${mapa}</h1>
                                  </div>`
    }

    console.log(voto)
}

function escolhaDeMapa() {

    var mapaVar = document.getElementById('selectMapaFavorito').value
    console.log(mapaVar)


    var fkMapa = 0

    for (posicao = 0; posicao <= listaMapa.length; posicao++) {
        if (posicao == mapaVar) {
            fkMapa = listaMapa[posicao]
            console.log(fkMapa)
        }
        if(fkMapa == 1) {
            var mapaEscolhido = 'Erangel'
        }else if(fkMapa == 2) {
            var mapaEscolhido = 'Miramar'
        }else if(fkMapa == 3) {
            var mapaEscolhido = 'Sanhok'
        }else if(fkMapa == 4) {
            var mapaEscolhido = 'Vikendi'
        }else {
            var mapaEscolhido = 'Taego'
        }
    }
    if (mapaVar == null) {
        console.log('não esta vindo nenhum mapa!')
    } else {
        fetch("/mapa/cadastrar", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                mapaServer: fkMapa,
                idUsuarioServer: idUsuario
            })
        })
        const usuario = {
            mapa: mapaEscolhido
        };
        sessionStorage.MAPA_USUARIO = usuario.mapa;
    }
    window.location = 'menu.html'
}

function mudarMapa() {
    mapaPrincipal.innerHTML = ''
    var mapaEscolhido = sessionStorage.MAPA_USUARIO
    if(mapaEscolhido == 'Erangel') {
        mapaPrincipal.innerHTML = `<img src="img/mapas/erangel.jpg">`
    }else if(mapaEscolhido == 'Miramar') {
        mapaPrincipal.innerHTML = `<img src="img/mapas/miramar.jpg">`
    }else if(mapaEscolhido == 'Sanhok') {
        mapaPrincipal.innerHTML = `<img src="img/mapas/sanhok.jpg">`
    }else if(mapaEscolhido == 'Vikendi') {
        mapaPrincipal.innerHTML = `<img src="img/mapas/vikendi.jpg">`
    }else {
        mapaPrincipal.innerHTML = `<img src="img/mapas/taego.jpg">`
    }
}

function calcularPorcentagem() {
    var partidasVencidas = document.getElementById("inputPartidasVencidas").value
    var qtdPartidas = document.getElementById("inputPartidasJogadas").value

    resultadoPorcentagemPartidas = (partidasVencidas / qtdPartidas) * 100 

    if(resultadoPorcentagemPartidas >= 50) {
        spanResultadoCalculo.innerHTML = `<span style="background-color: green; padding: 4px; width: 150px; 
        border: 2px solid black; border-radius: 6px;">
        você tem ${resultadoPorcentagemPartidas}% de vitória</span>`
    }else {
        spanResultadoCalculo.innerHTML = `<span style="background-color: red; padding: 4px; width: 150px; 
        border: 2px solid black; border-radius: 6px;">
        você tem ${resultadoPorcentagemPartidas}% de vitória</span>`
    }

    inputPartidasVencidas.value = ''
    inputPartidasJogadas.value = ''
    
}

function validarSessao() {

    var email = sessionStorage.EMAIL_USUARIO;
    console.log(email);

    // var b_usuario = document.getElementById("b_usuario");

    if (email != null) {

        // b_usuario.innerHTML = nome;
    } else {
        window.location = "../login.html";
    }
}

function limparSessao() {
    sessionStorage.clear();
    window.location = "../index.html";
}