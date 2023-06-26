var listaUsuariosQuiz = []
listaUsuariosQuiz = JSON.parse(localStorage.getItem('bdUsuariosQuiz'))
if (listaUsuariosQuiz == null) {
    listaUsuariosQuiz = []
}
function entrar() {
    var login = document.getElementById("login").value
    var senha = document.getElementById("senha").value

    for (var i in listaUsuariosQuiz) {
        if (listaUsuariosQuiz[i].login == login && listaUsuariosQuiz[i].senha == senha) {
            alert("Bem Vindo")
            localStorage.setItem('UsuarioJogando', listaUsuariosQuiz[i].nome)
            location.href = "jogar.html"
            return true
        }
    }
    alert("Usuário não cadastrado")

}
