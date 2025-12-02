const btnAdicionar = document.getElementById("btnAdicionar");
const btnLimpar = document.getElementById("btnLimpar");
const nomeInput = document.getElementById("nomeInput");
const listaNomes = document.getElementById("listaNomes");

btnAdicionar.addEventListener("click", function() {
    const nome = nomeInput.value.trim();

    if (nome === "") {
        alert("Digite um nome:");
        return;
    }

    const li = document.createElement("li");
    li.textContent = nome;

    listaNomes.appendChild(li);

    nomeInput.value = "";
    nomeInput.focus();
})

btnLimpar.addEventListener("click", function() {
    listaNomes.innerHTML = "";
})