const quizEl = document.getElementById("quiz");
const resultadoEl = document.getElementById("resultado");
const btnReiniciar = document.getElementById("btnReiniciar");

let indice = 0;
let pontos = 0;

const perguntas = [
    {
        pergunta: "1) Quanto é 2 + 2?",
        opcoes: ["3", "4", "5"],
        correta: 1
    },
    {
        pergunta: "2) Qual é a capital do Brasil?",
        opcoes: ["Brasília", "São Paulo", "Rio de Janeiro"],
        correta: 0
    },
    {
        pergunta: "3) Quem criou o JavaScript?",
        opcoes: ["Bill Gates", "Brendan Eich", "Linus Torvalds"],
        correta: 1
    },
    {
        pergunta: "4) HTML é:",
        opcoes: ["Linguagem de marcação", "Banco de dados", "Sistema operacional"],
        correta: 0
    },
    {
        pergunta: "5) Qual destes é um navegador?",
        opcoes: ["Chrome", "Excel", "Word"],
        correta: 0
    }
];

function mostrarPergunta() {
    resultadoEl.textContent = "";
    btnReiniciar.style.display = "none";

    if (indice >= perguntas.length) {
        finalizarQuiz();
        return;
    }

    const q = perguntas[indice];

    quizEl.innerHTML = `
        <h3>${q.pergunta}</h3>
    `;

    q.opcoes.forEach((opcao, i) => {
        const btn = document.createElement("button");
        btn.textContent = opcao;
        btn.style.display = "block";
        btn.style.margin = "5px 0";

        btn.onclick = () => {
            if (i === q.correta) {
                pontos++;
            }
            indice++;
            mostrarPergunta();
        };

        quizEl.appendChild(btn);
    });
}

function finalizarQuiz() {
    quizEl.innerHTML = "";

    let feedback = "";
    if (pontos <= 2) feedback = "Ruim 😢";
    else if (pontos <= 4) feedback = "Bom 🙂";
    else feedback = "Excelente 😎";

    resultadoEl.textContent = `Você fez ${pontos} ponto(s) — ${feedback}`;

    btnReiniciar.style.display = "block";
}

btnReiniciar.onclick = () => {
    indice = 0;
    pontos = 0;
    mostrarPergunta();
};

// inicia
mostrarPergunta();
