const input = document.getElementById("inputTarefa");
const botao = document.getElementById("btnAdd");
const lista = document.getElementById("lista");

let tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];

function salvar() {
    localStorage.setItem("tarefas", JSON.stringify(tarefas));
}

function atualizarTela() {
    lista.innerHTML = "";
    tarefas.forEach((texto, indice) => {
        const li = document.createElement("li");
        li.innerText = texto;

        const btn = document.createElement("button");
        btn.innerText = "remover";

        btn.onclick = function () {
            tarefas.splice(indice, 1);
            salvar();
            atualizarTela();
        };

        li.appendChild(btn);
        lista.appendChild(li);
    });
}

botao.onclick = function () {
    if (input.value === "") return;

    tarefas.push(input.value);
    salvar();
    atualizarTela();
    input.value = "";
};

atualizarTela();
