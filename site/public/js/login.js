// function logar() {
//     var email = document.getElementById('inputEmail').value
//     var senha = document.getElementById('inputSenha').value

//     console.log(email)
//     console.log(senha)

//     if(email == '') {
//         spanEmail.innerHTML = 'Não deixe o campo em branco'
//         inputEmail.style.borderBottom = '2px solid red'

//         inputSenha.style.borderBottom = '2px solid black'
//         spanSenha.innerHTML = ''
//     }else if (senha == '') {
//         spanSenha.innerHTML = 'Não deixe o campo em branco'
//         inputSenha.style.borderBottom = '2px solid red'

//         inputEmail.style.borderBottom = '2px solid black'
//         spanEmail.innerHTML = ''
//     }else if (email.indexOf('@') < 5 || email.length < 7) {
//         spanEmail.innerHTML = 'Insira um email Válido'
//         inputEmail.style.borderBottom = '2px solid red'

//         inputSenha.style.borderBottom = '2px solid black'
//         spanSenha.innerHTML = ''
//     }else if (senha.length < 5) {
//         spanSenha.innerHTML = 'Insira uma senha com mais de 5 caracteres'
//         spanEmail, innerHTML = 'uau'
//         inputSenha.style.borderBottom = '2px solid red'

//         inputEmail.style.borderBottom = '2px solid black'
//         spanEmail.innerHTML = ''
//     }else {
//         inputEmail.value = ''
//         inputSenha.value = ''
//         Swal.fire({
//             position: 'center',
//             icon: 'success',
//             title: 'Logado com sucesso!',
//             showConfirmButton: false,
//             timer: 5000
//           })
//           setTimeout(() => {
//             window.location = "menu.html";
//         }, "2000")
//     }
// }

function entrar() {

    var emailVar = document.getElementById('inputEmail').value
    var senhaVar = document.getElementById('inputSenha').value

    console.log(emailVar)
    console.log(senhaVar)

    if (emailVar == '') {
        spanEmail.innerHTML = 'Não deixe o campo em branco'
        inputEmail.style.borderBottom = '2px solid red'

        inputSenha.style.borderBottom = '2px solid black'
        spanSenha.innerHTML = ''
    } else if (senhaVar == '') {
        spanSenha.innerHTML = 'Não deixe o campo em branco'
        inputSenha.style.borderBottom = '2px solid red'

        inputEmail.style.borderBottom = '2px solid black'
        spanEmail.innerHTML = ''
    } else if (emailVar.indexOf('@') < 5 || emailVar.length < 7) {
        spanEmail.innerHTML = 'Insira um email Válido'
        inputEmail.style.borderBottom = '2px solid red'

        inputSenha.style.borderBottom = '2px solid black'
        spanSenha.innerHTML = ''
    } else if (senhaVar.length <= 5) {
        spanSenha.innerHTML = 'Insira uma senha com mais de 5 caracteres'
        spanEmail, innerHTML = 'uau'
        inputSenha.style.borderBottom = '2px solid red'

        inputEmail.style.borderBottom = '2px solid black'
        spanEmail.innerHTML = ''
    } else {


        console.log("FORM LOGIN: ", emailVar);
        console.log("FORM SENHA: ", senhaVar);

        fetch("/usuarios/autenticar", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                emailServer: emailVar,
                senhaServer: senhaVar
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO entrar()!")

            if (resposta.ok) {
                console.log(resposta);

                resposta.json().then(json => {
                    console.log(json);
                    console.log(JSON.stringify(json));

                    sessionStorage.EMAIL_USUARIO = json.email;
                    sessionStorage.NOME_USUARIO = json.nomeUsuario;
                    sessionStorage.ID_USUARIO = json.idUsuario;
                    sessionStorage.MAPA_USUARIO = json.fkMapa;
                    sessionStorage.VOTO_USUARIO = json.fkTimePubg;

                    Swal.fire({
                                position: 'center',
                                icon: 'success',
                                title: 'Logado com sucesso!',
                                showConfirmButton: false,
                                timer: 5000
                            })
                            setTimeout(() => {
                                window.location = "dashboard.html";
                            }, "2000")// apenas para exibir o loading

                });
                    } else {

                        console.log("Houve um erro ao tentar realizar o login!");
                        console.log(resposta);

                        inputEmail.value = ''
                        inputSenha.value = ''
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: 'Senha ou email errado(s)',
                        })

                    }

                }).catch(function (erro) {
                    console.log(erro);
                })

                return false;
            }   
}