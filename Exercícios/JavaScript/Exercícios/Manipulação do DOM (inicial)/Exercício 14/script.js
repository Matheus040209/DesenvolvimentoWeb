const busca = document.getElementById("busca");
const itens = document.querySelectorAll("#lista li");

busca.addEventListener("input", () => {

    const texto = busca.value.toLowerCase();

    itens.forEach(li => {
        const nome = li.textContent.toLowerCase();

        li.style.display = nome.includes(texto) ? "block" : "none";
    });

});