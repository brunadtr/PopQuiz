var listaPerguntas = []
listaPerguntas = JSON.parse(localStorage.getItem('bdPerguntas'))
if (listaPerguntas == null) {
    listaPerguntas = []
}



var questaoSorteada = ''
var listaSorteadas = []
var pontos = 0

function IniciarJogo() {
    exibirPerguntas()
    document.getElementById("iniciar").style.display = "none"
    document.getElementById("iniciado").style.display = "block"
}

function exibirPerguntas() {
    document.getElementById("resposta1").style.backgroundColor = "white"
    document.getElementById("resposta2").style.backgroundColor = "white"
    document.getElementById("resposta3").style.backgroundColor = "white"
    document.getElementById("resposta4").style.backgroundColor = "white"

    if (listaPerguntas.length == listaSorteadas.length) {
        location.href = "quizFim.html"
        return
    }

    do {
        questaoSorteada = parseInt(Math.random() * listaPerguntas.length)
    } while (listaSorteadas.indexOf(questaoSorteada) != -1)
    listaSorteadas.push(questaoSorteada)


    document.getElementById("exibirPergunta").innerHTML = listaPerguntas[questaoSorteada].pergunta
    document.getElementById("imagem").src = listaPerguntas[questaoSorteada].imagem
    document.getElementById("resposta1").innerHTML = listaPerguntas[questaoSorteada].resposta1
    document.getElementById("resposta2").innerHTML = listaPerguntas[questaoSorteada].resposta2
    document.getElementById("resposta3").innerHTML = listaPerguntas[questaoSorteada].resposta3
    document.getElementById("resposta4").innerHTML = listaPerguntas[questaoSorteada].resposta4
}



function resposta(correta) {
    if (correta != '') {
        if (correta == listaPerguntas[questaoSorteada].correta) {
            document.getElementById("resposta" + correta).style.backgroundColor = "rgb(3, 236, 7)"
            pontos += 10
            document.getElementById("pontos").innerHTML = pontos
            localStorage.setItem('pontos', pontos)
        }
        else {
            document.getElementById("resposta" + correta).style.backgroundColor = "red"
            document.getElementById("resposta" + listaPerguntas[questaoSorteada].correta).style.backgroundColor = "rgb(3, 236, 7)"
        }
        setTimeout(exibirPerguntas, 1800)
    }

}

function carregarJogador() {
    document.getElementById('Jogando').innerHTML = localStorage.getItem('UsuarioJogando')
}