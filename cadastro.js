var Perguntas = JSON.parse(localStorage.getItem('bdPerguntas')) || bancoPerguntas()
function enviar(){
    if(document.getElementById("exibirPergunta").value == '' || document.getElementById("resposta1").value == '' || document.getElementById("resposta2").value == '' || document.getElementById("resposta3").value =='' || document.getElementById("resposta4").value == '' ){
        alert("Preencha todos os campos")
        return
    }

    var quiz = {
        pergunta: document.getElementById("exibirPergunta").value,
        imagem: document.getElementById("linkImagem").value,
        resposta1: document.getElementById("resposta1").value,
        resposta2: document.getElementById("resposta2").value,
        resposta3: document.getElementById("resposta3").value,
        resposta4: document.getElementById("resposta4").value,
        correta: document.getElementById("correta").value
    }
    
    Perguntas.push(quiz)
    localStorage.setItem( 'bdPerguntas', JSON.stringify(Perguntas))
    alert('Pergunta enviada com sucesso')
    document.getElementById("exibirPergunta").value = ''
    document.getElementById("linkImagem").value = ''
    document.getElementById("imagem").src = ''
    document.getElementById("resposta1").value = ''
    document.getElementById("resposta2").value = ''
    document.getElementById("resposta3").value = ''
    document.getElementById("resposta4").value = ''
}

function exibirImg() {
    document.getElementById("imagem").src = document.getElementById("linkImagem").value
}

function bancoPerguntas(){
    var perguntas = [
      {
         "pergunta":"Qual foi a porcentagem de rejeição que Karol Conká recebeu em sua eliminação?",
         "imagem":"https://i.pinimg.com/originals/bd/48/a4/bd48a453fadd3544aec0bda1d70bcf5c.gif",
         "resposta1":"95,20%",
         "resposta2":"99,17%",
         "resposta3":"98,67%",
         "resposta4":"100%",
         "correta":"2"
      },
      {
         "pergunta":"Qual a obra cinematográfica mais conhecida que este ator já participou?",
         "imagem":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Jensen_Ackles_%2835444313103%29.jpg/1510px-Jensen_Ackles_%2835444313103%29.jpg",
         "resposta1":"The Winchesters",
         "resposta2":"The Boys",
         "resposta3":"Supernatural",
         "resposta4":"Halloween V",
         "correta":"3"
      },
      {
         "pergunta":"Quantos anos duram os estudos em Hogwarts?",
         "imagem":"https://onlineseries.com.br/wp-content/uploads/2022/01/Harry-Potter-De-Volta-A-Hogwarts-especial-1024x597.jpg",
         "resposta1":"7 anos de ensino no total para se formarem.",
         "resposta2":"8 anos de ensino no total para se formarem.",
         "resposta3":"13 anos de ensino no total para se formarem.",
         "resposta4":"10 anos de ensino no total para se formarem.",
         "correta":"1"
      },
      {
         "pergunta":"\"...Quando eu digo que não quero mais você É porque eu te quero Eu tenho medo de te dar meu coração...\"",
         "imagem":"https://i.makeagif.com/media/4-08-2017/YYuptS.gif",
         "resposta1":"\"...Como se o meu coração\"",
         "resposta2":"\"...E confessar que eu estou em tuas mãos\"",
         "resposta3":"\"...Deixe um bule de café em cima do fogão\"",
         "resposta4":"\"...Longe dos olhos e dentro do meu coração\"",
         "correta":"2"
      },
      {
         "pergunta":"Qual foi o filme vencedor na indicação \"melhor filme\" no Oscar 2023?",
         "imagem":"https://cdn.folhape.com.br/img/pc/1100/1/dn_arquivo/2023/03/priscila-enquadramento-capa-15.jpg",
         "resposta1":"Avatar: O caminho da água",
         "resposta2":"Triângulo da Tristeza",
         "resposta3":"Parasita",
         "resposta4":"Tudo em todo lugar ao mesmo tempo",
         "correta":"4"
      },
      {
         "pergunta":"Os Barões da Pisadinha é uma banda musical brasileira de piseiro e tecnobrega formada por:",
         "imagem":"",
         "resposta1":"Pedro Barão e Fábio Barão",
         "resposta2":"Roberto Barão e Luiz Barão",
         "resposta3":"Rogério Barão e Paulo Barão",
         "resposta4":"Rodrigo Barão e Felipe Barão",
         "correta":"4"
      },
      {
         "pergunta":"Quantas vezes Gretchen já foi casada?",
         "imagem":"https://i.pinimg.com/originals/87/97/45/8797454c9f8da2cad7f2a0e0bee75ddb.gif",
         "resposta1":"15",
         "resposta2":"18",
         "resposta3":"20",
         "resposta4":"10",
         "correta":"2"
      },
      {
         "pergunta":"Quantas temporadas tem a série \"Tapas & Beijos\"?",
         "imagem":"https://i.pinimg.com/564x/b9/58/8e/b9588e9569b3734f79f08a0894c014b3.jpg",
         "resposta1":"3",
         "resposta2":"2",
         "resposta3":"7",
         "resposta4":"5",
         "correta":"4"
      },
      {
         "pergunta":"Qual o nome completo do caneta azul?",
         "imagem":"https://observatoriodosfamosos.uol.com.br/portal/wp-content/uploads/2023/04/manoel-gomes-caneta-azul-golpe-milionario.jpg",
         "resposta1":"Manoel Jardim de Souza Gomes",
         "resposta2":"Manoel Jardim Gomes",
         "resposta3":"Manoel Gomes Jardim ",
         "resposta4":"Manoel Gomes",
         "correta":"2"
      },
      {
         "pergunta":"Qual foi a música de estreia de Lady Gaga?",
         "imagem":"https://static.independent.co.uk/2020/09/11/18/shutterstock_editorial_1224306b.jpg",
         "resposta1":"Judas",
         "resposta2":"Just Dance",
         "resposta3":"Poker Face",
         "resposta4":"Bloody Mary",
         "correta":"2"
      },
      {
         "pergunta":"Qual a irmã mais velha das Kardashians Jenners?",
         "imagem":"https://caras.uol.com.br/media/_versions/2022-abr/the-kardashians-starplus_widelg.jpg",
         "resposta1":"Kim Kardashian",
         "resposta2":"Kendall Jenner",
         "resposta3":"Kourtney Kardashian",
         "resposta4":"Kylie Jenner",
         "correta":"3"
      },
      {
         "pergunta":"Quando foi ao ar o primeiro episódio de Scooby-Doo?",
         "imagem":"https://img.olhardigital.com.br/wp-content/uploads/2023/01/scooby-doo.jpg",
         "resposta1":"1969",
         "resposta2":"1937",
         "resposta3":"1982",
         "resposta4":"1977",
         "correta":"1"
      }
   ]
     localStorage.setItem( 'bdPerguntas', JSON.stringify(perguntas))
     return dados
}