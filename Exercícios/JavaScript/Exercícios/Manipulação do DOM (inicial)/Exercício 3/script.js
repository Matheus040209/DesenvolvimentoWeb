const quadrado = document.getElementById("quadrado");
const botao = document.getElementById("btnMostrarEsconder");

botao.addEventListener("click", () => {
    quadrado.classList.toggle("hidden");
});