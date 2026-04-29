const observacao = document.getElementById("observacao");
const acao = document.getElementById("acao");

observacao.addEventListener("copy", function () {
    acao.textContent = "Você copiou um texto.";
});

observacao.addEventListener("cut", function () {
    acao.textContent = "Você recortou um texto.";
});

observacao.addEventListener("paste", function () {
    acao.textContent = "Você colou um texto.";
});