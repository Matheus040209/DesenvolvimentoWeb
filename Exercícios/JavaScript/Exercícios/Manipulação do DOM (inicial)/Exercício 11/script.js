let pontos = 10;

const pontosRestantes = document.getElementById("pontosRestantes");

const valores = {
    forca: document.getElementById("forcaValor"),
    agilidade: document.getElementById("agilidadeValor"),
    inteligencia: document.getElementById("inteligenciaValor")
};

// BOTÕES DE ADICIONAR
const botoesAdd = document.getElementsByClassName("add");
for (let botao of botoesAdd) {
    botao.addEventListener("click", function () {
        if (pontos > 0) {
            let atributo = this.getAttribute("data-attr");
            let valor = Number(valores[atributo].textContent);

            valor++;
            pontos--;

            valores[atributo].textContent = valor;
            pontosRestantes.textContent = pontos;
        }
    });
}

// BOTÕES DE SUBTRAIR
const botoesSub = document.getElementsByClassName("sub");
for (let botao of botoesSub) {
    botao.addEventListener("click", function () {
        let atributo = this.getAttribute("data-attr");
        let valor = Number(valores[atributo].textContent);

        if (valor > 0) {
            valor--;
            pontos++;

            valores[atributo].textContent = valor;
            pontosRestantes.textContent = pontos;
        }
    });
}

// CONFIRMAR
document.getElementById("confirmar").addEventListener("click", function () {
    const resultado = document.getElementById("resultado");

    if (pontos > 0) {
        resultado.textContent = "Você ainda tem pontos para distribuir!";
        resultado.style.color = "red";
    } else {
        resultado.textContent =
            "Distribuição final — Força: " +
            valores.forca.textContent +
            ", Agilidade: " +
            valores.agilidade.textContent +
            ", Inteligência: " +
            valores.inteligencia.textContent;

        resultado.style.color = "green";
    }
});