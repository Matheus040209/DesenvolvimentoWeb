const principal = document.getElementById("principal");
const thumbs = document.querySelectorAll(".thumbs img");
const btnPause = document.getElementById("btnPause");

let imagens = [];
let indiceAtual = 0;
let intervalo = null;
let pausado = false;

// pega src de todas as thumbs
thumbs.forEach(img => imagens.push(img.src));

// troca a imagem principal
function mostrarImagem(i) {
    indiceAtual = i;
    principal.src = imagens[indiceAtual];
}

// troca automática
function iniciarAutoTroca() {
    intervalo = setInterval(() => {
        indiceAtual++;
        if (indiceAtual >= imagens.length) indiceAtual = 0;
        mostrarImagem(indiceAtual);
    }, 2000); // troca a cada 2 segundos
}

function pausarOuPlay() {
    if (pausado) {
        iniciarAutoTroca();
        btnPause.textContent = "Pause Auto-Troca";
        pausado = false;
    } else {
        clearInterval(intervalo);
        btnPause.textContent = "Play Auto-Troca";
        pausado = true;
    }
}

// clique manual nas thumbnails
thumbs.forEach((img, index) => {
    img.onclick = () => mostrarImagem(index);
});

// botão de pause/play
btnPause.onclick = pausarOuPlay;

// inicia automático ao abrir
iniciarAutoTroca();
