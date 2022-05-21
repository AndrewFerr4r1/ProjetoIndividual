// function validarRegistro() {
//     var nome = document.getElementById('inputNome').value
//     var email = document.getElementById('inputEmail').value
//     var senha = document.getElementById('inputSenha').value
//     var confirmarSenha = document.getElementById('inputConfirmarSenha').value

//     console.log(nome)
//     console.log(email)
//     console.log(senha)
//     console.log(confirmarSenha)

//     if(nome == '') {
//         spanNome.innerHTML = 'Não deixe o campo em branco'
//         inputNome.style.borderBottom = '2px solid red'
//     }
//     else if(email == '') {
//         spanEmail.innerHTML = 'Não deixe o campo em branco'
//         inputEmail.style.borderBottom = '2px solid red'

//         inputNome.style.borderBottom = '2px solid black'
//         inputSenha.style.borderBottom = '2px solid black'
//         inputConfirmarSenha.style.borderBottom = '2px solid black'

//         spanSenha.innerHTML = ''
//         spanNome.innerHTML = ''
//         spanConfirmarSenha = ''
//     }else if (senha == '') {
//         spanSenha.innerHTML = 'Não deixe o campo em branco'
//         inputSenha.style.borderBottom = '2px solid red'

//         inputNome.style.borderBottom = '2px solid black'
//         inputEmail.style.borderBottom = '2px solid black'
//         inputConfirmarSenha.style.borderBottom = '2px solid black'

//         spanEmail.innerHTML = ''
//         spanNome.innerHTML = ''
//         spanConfirmarSenha = ''

//     }else if (confirmarSenha == '') {
//         spanConfirmarSenha.innerHTML = 'Não deixe o campo em branco'
//         inputConfirmarSenha.style.borderBottom = '2px solid red'

//         inputEmail.style.borderBottom = '2px solid black'
//         inputNome.style.borderBottom = '2px solid black'
//         inputSenha.style.borderBottom = '2px solid black'

//         spanEmail.innerHTML = ''
//         spanNome.innerHTML = ''
//         spanSenha.innerHTML = ''

//     }else if (email.indexOf('@') < 5 || email.length < 7) {
//         spanEmail.innerHTML = 'Insira um email Válido'
//         inputEmail.style.borderBottom = '2px solid red'

//         inputNome.style.borderBottom = '2px solid black'
//         inputSenha.style.borderBottom = '2px solid black'
//         inputConfirmarSenha.style.borderBottom = '2px solid black'

//         spanSenha.innerHTML = ''
//         spanConfirmarSenha.innerHTML = ''
//         spanNome.innerHTML = ''
//     }else if (senha.length < 5) {
//         spanSenha.innerHTML = 'Insira uma senha com mais de 5 caracteres'
//         spanConfirmarSenha.innerHTML = 'Insira uma senha com mais de 5 caracteres'
//         inputSenha.style.borderBottom = '2px solid red'
//         inputConfirmarSenha.style.borderBottom = '2px solid red'

//         inputEmail.style.borderBottom = '2px solid black'
//         inputNome.style.borderBottom = '2px solid black'

//         spanEmail.innerHTML = ''
//         spanNome.innerHTML = ''
//     }else if(senha != confirmarSenha) {
//         spanSenha.innerHTML = 'Senhas diferentes'
//         spanConfirmarSenha.innerHTML = 'Senhas diferentes'

//         inputSenha.style.borderBottom = '2px solid red'
//         inputConfirmarSenha.style.borderBottom = '2px solid red'

//         spanEmail.innerHTML = ''
//         spanNome.innerHTML = ''
//     }else {
//         inputEmail.value = ''
//         inputSenha.value = ''
//         spanConfirmarSenha.innerHTML = ''
//         spanNome.innerHTML = ''
//         Swal.fire({
//             position: 'center',
//             icon: 'success',
//             title: 'cadastro realizado com sucesso!',
//             showConfirmButton: false,
//             timer: 5000
//           })
//           setTimeout(() => {
//             window.location = "login.html";
//         }, "2000")
//     }
// }

function cadastrar() {
    var nomeVar = document.getElementById('inputNome').value
    var emailVar = document.getElementById('inputEmail').value
    var senhaVar = document.getElementById('inputSenha').value
    var confirmarSenhaVar = document.getElementById('inputConfirmarSenha').value


    //Recupere o valor da nova input pelo nome do id
    // Agora vá para o método fetch logo abaixo
        console.log(nomeVar)
        console.log(emailVar)
        console.log(senhaVar)
        console.log(confirmarSenhaVar)
        
        if(nomeVar == '') {
            spanNome.innerHTML = 'Não deixe o campo em branco'
            inputNome.style.borderBottom = '2px solid red'
        }else if(emailVar == '') {
            spanEmail.innerHTML = 'Não deixe o campo em branco'
            inputEmail.style.borderBottom = '2px solid red'
        
            inputNome.style.borderBottom = '2px solid black'
            inputSenha.style.borderBottom = '2px solid black'
            inputConfirmarSenha.style.borderBottom = '2px solid black'
        
            spanSenha.innerHTML = ''
            spanNome.innerHTML = ''
            spanConfirmarSenha = ''
        }else if (senhaVar == '') {
            spanSenha.innerHTML = 'Não deixe o campo em branco'
            inputSenha.style.borderBottom = '2px solid red'
        
            inputNome.style.borderBottom = '2px solid black'
            inputEmail.style.borderBottom = '2px solid black'
            inputConfirmarSenha.style.borderBottom = '2px solid black'
        
            spanEmail.innerHTML = ''
            spanNome.innerHTML = ''
            spanConfirmarSenha = ''
        
        }else if (confirmarSenhaVar == '') {
            spanConfirmarSenha.innerHTML = 'Não deixe o campo em branco'
            inputConfirmarSenha.style.borderBottom = '2px solid red'
        
            inputEmail.style.borderBottom = '2px solid black'
            inputNome.style.borderBottom = '2px solid black'
            inputSenha.style.borderBottom = '2px solid black'
        
            spanEmail.innerHTML = ''
            spanNome.innerHTML = ''
            spanSenha.innerHTML = ''
        
        }else if (emailVar.indexOf('@') < 5 || emailVar.length < 7) {
            spanEmail.innerHTML = 'Insira um email Válido'
            inputEmail.style.borderBottom = '2px solid red'
        
            inputNome.style.borderBottom = '2px solid black'
            inputSenha.style.borderBottom = '2px solid black'
            inputConfirmarSenha.style.borderBottom = '2px solid black'
        
            spanSenha.innerHTML = ''
            spanConfirmarSenha.innerHTML = ''
            spanNome.innerHTML = ''
        }else if (senhaVar.length < 5) {
            spanSenha.innerHTML = 'Insira uma senha com mais de 5 caracteres'
            spanConfirmarSenha.innerHTML = 'Insira uma senha com mais de 5 caracteres'
            inputSenha.style.borderBottom = '2px solid red'
            inputConfirmarSenha.style.borderBottom = '2px solid red'
        
            inputEmail.style.borderBottom = '2px solid black'
            inputNome.style.borderBottom = '2px solid black'
        
            spanEmail.innerHTML = ''
            spanNome.innerHTML = ''
        }else if(senhaVar != confirmarSenhaVar) {
            spanSenha.innerHTML = 'Senhas diferentes'
            spanConfirmarSenha.innerHTML = 'Senhas diferentes'
        
            inputSenha.style.borderBottom = '2px solid red'
            inputConfirmarSenha.style.borderBottom = '2px solid red'
        
            spanEmail.innerHTML = ''
            spanNome.innerHTML = ''
        }else {
        // Enviando o valor da nova input
        fetch("/usuarios/cadastrar", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                // crie um atributo que recebe o valor recuperado aqui
                // Agora vá para o arquivo routes/usuario.js
                nomeServer: nomeVar,
                emailServer: emailVar,
                senhaServer: senhaVar
            })
        }).then(function (resposta) {

            console.log("resposta: ", resposta);

            if (resposta.ok) {
                inputEmail.value = ''
                inputSenha.value = ''
                inputConfirmarSenha.value = ''
                inputNome.value = ''
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'cadastro realizado com sucesso!',
                    showConfirmButton: false,
                    timer: 5000
                    })
                    setTimeout(() => {
                    window.location = "login.html";
                }, "2000")
                
            } else {
                throw ("Houve um erro ao tentar realizar o cadastro!");
            }
        }).catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
            finalizarAguardar();
        });

        return false;
    }
}