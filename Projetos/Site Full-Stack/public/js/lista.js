const lista = document.getElementById("lista");
const mensagem = document.getElementById("mensagem");
const botao = document.getElementById("btnAtualizar");

botao.addEventListener("click", carregarUsuarios);

async function carregarUsuarios() {
  mensagem.textContent = "Carregando...";

  try {
    const resposta = await fetch("/api/usuarios");

    if (!resposta.ok) {
      throw new Error("Erro ao buscar usuários");
    }

    const usuarios = await resposta.json();

    renderizarUsuarios(usuarios);

    mensagem.textContent = "";

  } catch (erro) {
    mensagem.textContent = "Erro ao carregar usuários.";
    mensagem.style.color = "red";
    console.error(erro);
  }
}

function renderizarUsuarios(usuarios) {
  lista.innerHTML = "";

  if (usuarios.length === 0) {
    lista.innerHTML = "<li>Nenhum usuário cadastrado.</li>";
    return;
  }

  usuarios.forEach(usuario => {
    const li = document.createElement("li");
    li.innerHTML = `
      <strong>${usuario.nome}</strong> - ${usuario.idade} anos - ${usuario.email}
      <div style="margin-top: 10px;">
        <a href="usuario.html?id=${usuario.id}" class="btn-detalhes">Ver detalhes</a>
        <button class="btn-delete" data-id="${usuario.id}">Excluir</button>
      </div>
    `;
    lista.appendChild(li);
  });

  // Event delegation para botões delete (adicione após renderizar)
  lista.querySelectorAll('.btn-delete').forEach(btn => {
    btn.addEventListener('click', handleDelete);
  });
}

async function handleDelete(event) {
  const botao = event.target;
  const id = parseInt(botao.dataset.id);

  if (!confirm(`Tem certeza que deseja excluir o usuário ID ${id}?`)) {
    return;
  }

  try {
    mensagem.textContent = "Excluindo...";
    const resposta = await fetch(`/api/usuarios/id/${id}`, {
      method: 'DELETE'
    });

    if (!resposta.ok) {
      const erro = await resposta.json();
      throw new Error(erro.erro || 'Erro ao excluir');
    }

    mensagem.textContent = "Usuário excluído com sucesso!";
    mensagem.style.color = "green";

    // Refresh lista e total
    await Promise.all([
      carregarUsuarios(),
      fetch("/api/usuarios/total").then(res => res.json()).then(data => {
        document.getElementById("totalUsuarios").textContent = `Total de usuários: ${data.total}`;
      })
    ]);

    setTimeout(() => {
      mensagem.textContent = "";
    }, 2000);

  } catch (erro) {
    mensagem.textContent = `Erro: ${erro.message}`;
    mensagem.style.color = "red";
    console.error(erro);
  }
}

carregarUsuarios();

