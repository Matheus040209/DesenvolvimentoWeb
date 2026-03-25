const estatisticasElemento = document.getElementById("estatisticas");
const mensagemEstatisticas = document.getElementById("mensagemEstatisticas");

document.getElementById("btnEstatisticas").addEventListener("click", atualizarEstatisticas);

async function atualizarEstatisticas() {
  try {
    mensagemEstatisticas.textContent = "Carregando...";
    mensagemEstatisticas.style.color = "blue";

    const resposta = await fetch("/api/usuarios/estatisticas");

    if (!resposta.ok) {
      throw new Error(`HTTP ${resposta.status}: ${resposta.statusText}`);
    }

    const dados = await resposta.json();
    console.log("Dados recebidos:", dados); // Debug

    renderizarEstatisticas(dados);
    mensagemEstatisticas.textContent = "Estatísticas atualizadas!";

  } catch (erro) {
    console.error("Erro completo:", erro);
    mensagemEstatisticas.textContent = `Erro: ${erro.message}`;
    mensagemEstatisticas.style.color = "red";
  }
}

function renderizarEstatisticas(dados) {
  estatisticasElemento.innerHTML = "";

  const dadosParaRender = Array.isArray(dados) ? dados : [dados];
  
  dadosParaRender.forEach(stat => {
    const li = document.createElement("li");
    li.innerHTML = `
      <strong>Total: ${stat.total}</strong><br>
      Média idade: <strong>${stat.media_idade} anos</strong><br>
      Maior/Menor idade: <strong>${stat.maior_idade} / ${stat.menor_idade}</strong>
    `;
    estatisticasElemento.appendChild(li);
  });
}

// Auto carrega
atualizarEstatisticas();

