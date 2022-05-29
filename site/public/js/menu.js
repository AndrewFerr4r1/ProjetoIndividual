var listaMapa = [0, 1, 2, 3, 4, 5]

voto = sessionStorage.VOTO_USUARIO
email = sessionStorage.EMAIL_USUARIO
mapa = sessionStorage.MAPA_USUARIO

function mostrarPerfil() {

    if(voto != undefined) {
        listarPerfil.innerHTML = `<div class="perfil">
                                    <h1>Nome:</h1>
                                    <h1>Email: ${email}</h1>
                                    <h1>Voto: ${voto}</h1>
                                    <h1>Mapa preferido:</h1>
                              </div>`
    }if(mapa != undefined) {
        listarPerfil.innerHTML = `<div class="perfil">
                                        <h1>Nome:</h1>
                                        <h1>Email: ${email}</h1>
                                        <h1>Voto: ${voto}</h1>
                                        <h1>Mapa preferido: ${mapa}</h1>
                                  </div>`
    }

    console.log(voto)
}

function escolhaDeMapa() {
    // var mapaEscolhido = document.getElementById('selectMapaFavorito').value

    // const usuario = {
    //     mapa: mapaEscolhido
    // };
    // sessionStorage.MAPA_USUARIO = usuario.mapa;

    // mapa = sessionStorage.MAPA_USUARIO
 
    // if(mapa != undefined) {
    //     listarPerfil.innerHTML = `<div class="perfil">
    //                                 <h1>Nome:</h1>
    //                                 <h1>Email: ${email}</h1>
    //                                 <h1>Voto: ${voto}</h1>
    //                                 <h1>Mapa preferido: ${mapa}</h1>
    //                           </div>`
    // }

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
                mapaServer: fkMapa
            })
        })
        const usuario = {
            mapa: mapaEscolhido
        };
        sessionStorage.MAPA_USUARIO = usuario.mapa;
    }
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