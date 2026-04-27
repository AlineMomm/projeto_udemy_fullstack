let temDados = false;

// detecta se o usuário digitou algo
const nome = document.getElementById("nome");
const mensagem = document.getElementById("mensagem");

nome.addEventListener("input", function () {
    temDados = true;
});

mensagem.addEventListener("input", function () {
    temDados = true;
});

// evento de saída da página
window.addEventListener("beforeunload", function (event) {
    if (temDados) {
        event.preventDefault();
        event.returnValue = "";
    }
});