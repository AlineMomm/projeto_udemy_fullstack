const cards = document.querySelectorAll(".card");
const resultado = document.getElementById("resultado");

cards.forEach(function (card) {

    card.addEventListener("click", function (event) {

        // remove seleção de todos
        cards.forEach(function (cardAtual) {
            cardAtual.classList.remove("ativo");
        });

        // adiciona no clicado
        event.target.classList.add("ativo");

        // pega nome do produto
        const nome = event.target.getAttribute("data-nome");

        // mostra na tela
        resultado.textContent = "Você selecionou: " + nome;
    });

});

/*
Resumo da lógica

O código faz isso:

pega todos os cards
pega o lugar onde vai mostrar o resultado
adiciona um evento de clique em cada card
quando clicar:
    remove a seleção de todos
    adiciona seleção no card clicado
    pega o nome do produto
    mostra o nome na tela
*/