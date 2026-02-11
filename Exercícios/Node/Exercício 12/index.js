
let acao = process.argv[2];

if (acao == "atacar" || "Atacar" || "ATACAR"){
    console.log("Você atacou");
}else if(acao == "fugir" || "Fugir" || "FUGIR"){
    console.log("Você fugiu");
}else if(acao == "defender" || "Defender" || "DEFENDER"){
    console.log("Você se defendeu")
}else{
    console.log("Comando inválido");
}