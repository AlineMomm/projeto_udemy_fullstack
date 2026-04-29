const formulario = document.getElementById("formulario");
const observacao = document.getElementById("observacao");
const contador = document.getElementById("contador");
const mensagem = document.getElementById("mensagem");
const botao = document.getElementById("botao");
const resultado = document.getElementById("resultado");

const limite = 100;

// INPUT → valida enquanto digita
observacao.addEventListener("input", function () {

    const texto = observacao.value;
    const quantidade = texto.length;

    contador.textContent = quantidade + "/" + limite + " caracteres";

    if (quantidade > limite) {
        contador.className = "perigo";
        mensagem.textContent = "Você passou do limite.";
        botao.disabled = true;
    } else {
        contador.className = "normal";
        mensagem.textContent = "";
        botao.disabled = false;
    }

});


// SUBMIT → valida no envio
formulario.addEventListener("submit", function (event) {

    event.preventDefault();

    const texto = observacao.value.trim();
    const quantidade = texto.length;

    // validação final
    if (texto === "") {
        alert("Digite uma observação.");
        return;
    }

    if (quantidade > limite) {
        alert("Observação muito longa.");
        return;
    }

    // sucesso
    resultado.textContent = "Pedido enviado com sucesso!";
});