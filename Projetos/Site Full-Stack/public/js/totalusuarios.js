const totalUsuariosElement = document.getElementById("totalUsuarios");

async function atualizarTotalUsuarios() {
    try {
        const response = await fetch("/api/usuarios/total");
        const data = await response.json();

        totalUsuariosElement.textContent = `Total de usuários: ${data.total}`;
    } catch (erro) {
        console.error("Erro ao buscar total de usuários:", erro);
        totalUsuariosElement.textContent = "Erro ao carregar total.";
    }
}

atualizarTotalUsuarios();

document.getElementById("btnAtualizar").addEventListener("click", atualizarTotalUsuarios);