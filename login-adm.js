function adm(){
    var senha = 'adm123'
    if(document.getElementById("senha-adm").value == senha){
        alert("Acesso permitido")
        location.href = "cadastro.html"
    }
    else{
        alert("Informe a senha")
    }
}