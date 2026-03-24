document.addEventListener('DOMContentLoaded', async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');

    const loadingEl = document.getElementById('loading');
    const errorEl = document.getElementById('error');
    const listaEl = document.getElementById('listaUsuario');

    if (!id || isNaN(id) || parseInt(id) <= 0) {
        loadingEl.style.display = 'none';
        errorEl.textContent = 'ID de usuário inválido na URL.';
        errorEl.style.display = 'block';
        return;
    }

    loadingEl.textContent = `Carregando usuário ID ${id}...`;

    try {
        const response = await fetch(`http://localhost:3000/api/usuarios/id/${id}`);
        
        if (!response.ok) {
            throw new Error(response.status === 404 ? 'Usuário não encontrado' : 'Erro no servidor');
        }

        const usuario = await response.json();

        loadingEl.style.display = 'none';
        listaEl.style.display = 'block';

        listaEl.innerHTML = `
            <li><strong>ID:</strong> ${usuario.id}</li>
            <li><strong>Nome:</strong> ${usuario.nome}</li>
            <li><strong>Idade:</strong> ${usuario.idade}</li>
            <li><strong>Email:</strong> ${usuario.email}</li>
        `;
    } catch (error) {
        loadingEl.style.display = 'none';
        errorEl.textContent = error.message;
        errorEl.style.display = 'block';
    }
});
