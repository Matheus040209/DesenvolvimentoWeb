const campos = document.getElementsByClassName("campos");
const botao = document.getElementById("btnEnviar");


botao.addEventListener ("click", function(){

    const nome = document.getElementById("nome").value
    const email = document.getElementById("email").value
    const mensagem = document.getElementById("mensagem").value 
     
    if (nome === "" || email === "" || mensagem === "" ){
        alert ("Preencha todos os campos");
    }else{
        alert ("Formulario preenchido com sucesso");
    }
});