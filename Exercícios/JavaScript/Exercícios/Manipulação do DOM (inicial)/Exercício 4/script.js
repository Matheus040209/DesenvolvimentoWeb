const valor = document.getElementById ("valor")
const btnMais1 = document.getElementById("btnMais1");
const btnMenos1 = document.getElementById("btnMenos1");

let contador = 0;

btnMais1.addEventListener("click", function(){
    contador++;
    valor.textContent = contador;
});

btnMenos1.addEventListener("click", function(){
    if (contador>0){
    contador--;
    valor.textContent = contador;
    }
});
