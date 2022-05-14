function validarRegistro() {
    var nome = document.getElementById('inputNome').value
    var email = document.getElementById('inputEmail').value
    var senha = document.getElementById('inputSenha').value
    var confirmarSenha = document.getElementById('inputConfirmarSenha').value

    console.log(nome)
    console.log(email)
    console.log(senha)
    console.log(confirmarSenha)

    if(nome == '') {
        spanNome.innerHTML = 'Não deixe o campo em branco'
        inputNome.style.borderBottom = '2px solid red'
    }
    else if(email == '') {
        spanEmail.innerHTML = 'Não deixe o campo em branco'
        inputEmail.style.borderBottom = '2px solid red'

        inputNome.style.borderBottom = '2px solid black'
        inputSenha.style.borderBottom = '2px solid black'
        inputConfirmarSenha.style.borderBottom = '2px solid black'

        spanSenha.innerHTML = ''
        spanNome.innerHTML = ''
        spanConfirmarSenha = ''
    }else if (senha == '') {
        spanSenha.innerHTML = 'Não deixe o campo em branco'
        inputSenha.style.borderBottom = '2px solid red'

        inputNome.style.borderBottom = '2px solid black'
        inputEmail.style.borderBottom = '2px solid black'
        inputConfirmarSenha.style.borderBottom = '2px solid black'

        spanEmail.innerHTML = ''
        spanNome.innerHTML = ''
        spanConfirmarSenha = ''

    }else if (confirmarSenha == '') {
        spanConfirmarSenha.innerHTML = 'Não deixe o campo em branco'
        inputConfirmarSenha.style.borderBottom = '2px solid red'

        inputEmail.style.borderBottom = '2px solid black'
        inputNome.style.borderBottom = '2px solid black'
        inputSenha.style.borderBottom = '2px solid black'

        spanEmail.innerHTML = ''
        spanNome.innerHTML = ''
        spanSenha.innerHTML = ''

    }else if (email.indexOf('@') < 5 || email.length < 7) {
        spanEmail.innerHTML = 'Insira um email Válido'
        inputEmail.style.borderBottom = '2px solid red'

        inputNome.style.borderBottom = '2px solid black'
        inputSenha.style.borderBottom = '2px solid black'
        inputConfirmarSenha.style.borderBottom = '2px solid black'

        spanSenha.innerHTML = ''
        spanConfirmarSenha.innerHTML = ''
        spanNome.innerHTML = ''
    }else if (senha.length < 5) {
        spanSenha.innerHTML = 'Insira uma senha com mais de 5 caracteres'
        spanConfirmarSenha.innerHTML = 'Insira uma senha com mais de 5 caracteres'
        inputSenha.style.borderBottom = '2px solid red'
        inputConfirmarSenha.style.borderBottom = '2px solid red'

        inputEmail.style.borderBottom = '2px solid black'
        inputNome.style.borderBottom = '2px solid black'

        spanEmail.innerHTML = ''
        spanNome.innerHTML = ''
    }else if(senha != confirmarSenha) {
        spanSenha.innerHTML = 'Senhas diferentes'
        spanConfirmarSenha.innerHTML = 'Senhas diferentes'

        inputSenha.style.borderBottom = '2px solid red'
        inputConfirmarSenha.style.borderBottom = '2px solid red'

        spanEmail.innerHTML = ''
        spanNome.innerHTML = ''
    }else {
        inputEmail.value = ''
        inputSenha.value = ''
        spanConfirmarSenha.innerHTML = ''
        spanNome.innerHTML = ''
        window.location.assign("menu.html")
    }
}