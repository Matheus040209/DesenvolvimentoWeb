const btnRegistrar = document.getElementById ("btnRegistrar")
const btnLimpar = document.getElementById ("btnLimpar");
const registro = document.getElementById("registro");

btnRegistrar.addEventListener("click", function(){
    const p = document.createElement ("p");
    p.innerHTML = "Clique registrado. <br> Data: " + new Date();

    registro.appendChild(p);
})

btnLimpar.addEventListener("click", function(){
    registro.innerHTML = "";
})