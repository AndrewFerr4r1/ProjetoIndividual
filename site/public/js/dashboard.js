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
                votoServer: fkVoto
            })
        })
    }
}

function validarSessao() {

    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;
    console.log(email);

    // var b_usuario = document.getElementById("b_usuario");

    if (email != null && nome != null) {

        // b_usuario.innerHTML = nome;
    } else {
        window.location = "../login.html";
    }
}

function limparSessao() {
    sessionStorage.clear();
    window.location = "../login.html";
}