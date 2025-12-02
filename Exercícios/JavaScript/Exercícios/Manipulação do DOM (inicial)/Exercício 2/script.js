const paragrafo1 = document.getElementById("paragrafo1");
const paragrafo2 = document.getElementById("paragrafo2");
const paragrafo3 = document.getElementById("paragrafo3");
const btnAlterarTexto1 = document.getElementById("btnAlterarTexto1");
const btnAlterarTexto2 = document.getElementById("btnAlterarTexto2");
const btnAlterarTexto3 = document.getElementById("btnAlterarTexto3");

btnAlterarTexto1.addEventListener("click", function(){
    paragrafo1.textContent = "A programação tem se tornado uma das habilidades mais importantes do mundo moderno. Mesmo linguagens simples, como JavaScript, permitem criar sites, jogos e automações que facilitam a vida. Quanto mais você pratica, mais natural fica transformar ideias em código."
});

btnAlterarTexto2.addEventListener("click", function(){
    paragrafo2.textContent = "As florestas tropicais são essenciais para o equilíbrio do planeta. Elas ajudam a regular o clima, abrigam milhares de espécies e fornecem recursos naturais importantes. Cuidar delas significa proteger o futuro das próximas gerações."
});

btnAlterarTexto3.addEventListener("click", function(){
    paragrafo3.textContent = "A exploração espacial continua avançando com novas descobertas todos os anos. Sondas, telescópios e missões tripuladas revelam detalhes incríveis sobre planetas distantes. Cada nova informação ajuda a humanidade a entender um pouco mais sobre o universo."
});

