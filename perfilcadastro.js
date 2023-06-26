var Perguntas = []
Perguntas = JSON.parse(localStorage.getItem('bdUsuariosQuiz'))
if (Perguntas == null) {
    Perguntas = []
}

function botaoCadastrar() {
    if(document.getElementById("nome").value == '' || document.getElementById("login").value == '' || document.getElementById("senha").value == ''){
        alert("Preencha todos os campos")
        return
    }

    var nome = document.getElementById("nome").value
    var login = document.getElementById("login").value
    var senha = document.getElementById("senha").value

    var usuario = {
        nome: nome,
        login: login,
        senha: senha
    }
    Perguntas.push(usuario)
    localStorage.setItem('bdUsuariosQuiz', JSON.stringify(Perguntas))
    alert('Usuário cadastrado com sucesso. Faça o login')
    location.href="login.html"
}

function exibirCadastros() {
    document.getElementById('cadastrados').innerHTML = ''

    Perguntas.forEach((item, pos) => {
        document.getElementById('cadastrados').innerHTML +=
            `${item.login} ${pos}`
    })
}