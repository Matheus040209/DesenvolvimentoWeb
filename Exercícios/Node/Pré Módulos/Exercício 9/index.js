let nome = process.argv[2];
let preco = process.argv[3];
let ouro = process.argv[4];

if (preco>ouro){
    console.log("Voce nao pode comprar")
}else{
    console.log("Voce pode comprar");
}