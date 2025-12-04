const nomeInput = document.getElementById("nome");
const idadeInput = document.getElementById("idade");
const btnAdd = document.getElementById("btnAdd");
const lista = document.getElementById("lista");

let alunos = []; // array de objetos

function atualizarLista() {
    lista.innerHTML = "";

    alunos.forEach((aluno, index) => {
        const li = document.createElement("li");
        li.textContent = `${aluno.nome} - ${aluno.idade} anos `;

        const btn = document.createElement("button");
        btn.textContent = "Excluir";

        btn.onclick = () => {
            alunos = alunos.filter((_, i) => i !== index);
            atualizarLista();
        };

        li.appendChild(btn);
        lista.appendChild(li);
    });
}

btnAdd.onclick = () => {
    const nome = nomeInput.value.trim();
    const idade = idadeInput.value;

    if (nome === "" || idade === "") return;

    alunos.push({ nome, idade });

    atualizarLista();

    nomeInput.value = "";
    idadeInput.value = "";
};
