const lista = document.getElementById ("lista");
const primeiro = document.getElementById ("primeiro");
const segundo = document.getElementById ("segundo");
const terceiro = document.getElementById ("terceiro");
const btnPrimeiro = document.getElementById ("btnPrimeiro");
const btnSegundo = document.getElementById ("btnSegundo");
const btnTerceiro = document.getElementById ("btnTerceiro");

btnPrimeiro.addEventListener("click", function(){
    primeiro.remove();
});

btnSegundo.addEventListener("click", function(){
    segundo.remove();
});

btnTerceiro.addEventListener("click", function(){
    terceiro.remove();
});