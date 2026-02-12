function boasVindas(nome){
    console.log("Boas vindas", nome);
};

function despedida(nome){
    console.log("Adeus", nome);
};

function autor(nome){
    console.log("Autor do sistema: ", nome);
};

module.exports = {
    boasVindas,
    despedida,
    autor
};