var idUsuario = sessionStorage.ID_USUARIO

function publicar() {
    var tituloVar = document.getElementById('inputTitulo').value
    var descricaoVar = document.getElementById('inputDescricao').value

    console.log(tituloVar, descricaoVar)
    if (tituloVar == '' || descricaoVar == '') {
        alert('Não tem nada')
    }
    else {
        // Enviando o valor da nova input
        fetch("/pub/cadastrar", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                // crie um atributo que recebe o valor recuperado aqui
                // Agora vá para o arquivo routes/usuario.js
                tituloServer: tituloVar,
                descricaoServer: descricaoVar,
                idUsuarioServer: idUsuario
            })
        }).then(function (resposta) {

            console.log("resposta: ", resposta);

            if (resposta.ok) {
                inputTitulo.value = ''
                inputDescricao.value = ''

                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'publicação realizada com sucesso!',
                    showConfirmButton: false,
                })
                setTimeout(() => {
                    window.location = "publicacoes.html";
                }, "1000")

            } else {
                throw ("Houve um erro ao tentar realizar o cadastro!");
            }
        }).catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
        });

        return false;
    }
}

function resgatarPublicacao() {
    fetch(`/pub/listarPublicacao`, { cache: "no-store" })
        .then(function (response) {
            if (response.ok) {
                response.json().then(function (resposta) {
                    console.log("Dados recebidos: ", resposta);
                    exibirPublicacao(resposta)
                });
            } else {
                console.error("Nenhum dado encontrado ou erro na API");
            }
        })
        .catch(function (error) {
            console.error(
                `Erro na obtenção dos dados p/ gráfico: ${error.message}`
            );
        });
}

function exibirPublicacao(resposta) {
    for (i = 0; i < resposta.length; i++) {
        var registro = resposta[i];
        divPublicacao.innerHTML += `<div class="partePublicacoes" style="border: 2px solid black; background-color: rgb(98, 124, 98);">
                                        <span><b>Nome:</b>${registro.nomeUsuario}</span><br>
                                        <span><b>Titulo:</b>${registro.titulo}</span><br>
                                        <span><b>Descricao:</b>${registro.descricao}</span>
                                    </div>`;
    }
}

function limparSessao() {
    sessionStorage.clear();
    window.location = "../index.html";
}