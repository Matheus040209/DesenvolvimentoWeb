function validarNome (nome){
    if (nome.trim().lenght <3){
        console.log("Nome precisa ter pelo menos 3 letras");
    }else{
        console.log("Seu nome é ", nome)
    }
}

function validarIdade (idade){
    if (idade<0){
        console.log("Idade inválida");
    }else{
        console.log("Sua idade é", idade)
    }
}

module.exports = {
    validarNome,
    validarIdade
};