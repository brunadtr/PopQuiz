document.getElementById('pontos').innerHTML = localStorage.getItem('pontos')
document.getElementById('nome').innerHTML = localStorage.getItem('UsuarioJogando')

var ranking = JSON.parse(localStorage.getItem('bdRanking')) || []

var objJogadores = {
    usuario: document.getElementById("nome").innerHTML,
    pontos: document.getElementById("pontos").innerHTML
}
ranking.push(objJogadores)
localStorage.setItem('bdRanking', JSON.stringify(ranking))

for (var i in ranking){
    document.getElementById("ranking").innerHTML += `${ranking[i].usuario} ${ranking[i].pontos} <br>`
}