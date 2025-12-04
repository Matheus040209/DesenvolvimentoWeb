// Espera o DOM estar pronto (evita document.getElementById null)
document.addEventListener("DOMContentLoaded", function () {
  console.log("script.js carregado"); // se aparecer no console, o arquivo está sendo executado

  const tempoEl = document.getElementById("tempo");
  const btnStart = document.getElementById("btnStart");
  const btnReset = document.getElementById("btnReset");

  // checagem rápida (mostra erro se algum elemento não existir)
  if (!tempoEl || !btnStart || !btnReset) {
    console.error("Elemento(s) não encontrado(s). Verifique os IDs no HTML.");
    return;
  }

  let tempo = 0;
  let intervalo = null;

  function atualizarTela() {
    tempoEl.textContent = tempo;
  }

  function startPause() {
    if (intervalo === null) {
      // iniciar
      intervalo = setInterval(() => {
        tempo++;
        atualizarTela();
      }, 1000);
      btnStart.textContent = "Pause";
      console.log("Iniciou o contador");
    } else {
      // pausar
      clearInterval(intervalo);
      intervalo = null;
      btnStart.textContent = "Start";
      console.log("Pausou o contador");
    }
  }

  function resetar() {
    if (intervalo !== null) {
      clearInterval(intervalo);
      intervalo = null;
    }
    tempo = 0;
    atualizarTela();
    btnStart.textContent = "Start";
    console.log("Resetou o contador");
  }

  btnStart.addEventListener("click", startPause);
  btnReset.addEventListener("click", resetar);

  // mostra inicial
  atualizarTela();
});
