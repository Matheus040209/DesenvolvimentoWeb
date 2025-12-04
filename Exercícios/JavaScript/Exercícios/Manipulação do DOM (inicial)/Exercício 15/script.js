function finalizar() {


    const marcados = document.querySelectorAll("input:checked");

    let acertos = 0;

    marcados.forEach(item => acertos += Number(item.value));

    document.getElementById("resultado").textContent =
        "Você acertou " + acertos + " de 3 perguntas.";
}