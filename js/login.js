function logar() {
    var email = document.getElementById('inputEmail').value
    var senha = document.getElementById('inputSenha').value

    console.log(email)
    console.log(senha)

    if(email == '') {
        spanEmail.innerHTML = 'Não deixe o campo em branco'
        inputEmail.style.borderBottom = '2px solid red'

        inputSenha.style.borderBottom = '2px solid black'
        spanSenha.innerHTML = ''
    }else if (senha == '') {
        spanSenha.innerHTML = 'Não deixe o campo em branco'
        inputSenha.style.borderBottom = '2px solid red'

        inputEmail.style.borderBottom = '2px solid black'
        spanEmail.innerHTML = ''
    }else if (email.indexOf('@') < 5 || email.length < 7) {
        spanEmail.innerHTML = 'Insira um email Válido'
        inputEmail.style.borderBottom = '2px solid red'

        inputSenha.style.borderBottom = '2px solid black'
        spanSenha.innerHTML = ''
    }else if (senha.length < 5) {
        spanSenha.innerHTML = 'Insira uma senha com mais de 5 caracteres'
        spanEmail, innerHTML = 'uau'
        inputSenha.style.borderBottom = '2px solid red'

        inputEmail.style.borderBottom = '2px solid black'
        spanEmail.innerHTML = ''
    }else {
        inputEmail.value = ''
        inputSenha.value = ''
        window.location.assign("menu.html")
    }
}