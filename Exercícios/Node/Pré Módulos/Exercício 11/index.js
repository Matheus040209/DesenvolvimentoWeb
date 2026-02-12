let danoAtaque = Number(process.argv[2]);
let defesaInimigo = Number(process.argv[3]);
let danoEfetuado = danoAtaque - defesaInimigo;

if (danoEfetuado<=0){
    danoEfetuado = 0
}

console.log("Dano efetuado no inimigo: ", danoEfetuado);