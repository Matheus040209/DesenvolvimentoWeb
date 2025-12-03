const tabela = document.getElementById("tabela");
const btnAdicionar = document.getElementById("btnAdicionar");
const btnRemover = document.getElementById("btnRemover");

btnAdicionar.addEventListener("click", function(){
    const novaLinha = tabela.insertRow();
    
    novaLinha.innerHTML = `

    <td>Cleverton</td>
    <td>cleverton@example.com</td>
    <td>17</td>

    `;
});

btnRemover.addEventListener("click", function(){
    const itens = tabela.querySelectorAll("tr");

    if (itens.length > 0){
        itens[itens.length - 1].remove();
    }else{
        alert("Não há mais linhas para remover!");
    }
});