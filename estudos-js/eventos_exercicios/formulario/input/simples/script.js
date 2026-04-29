const nomeInput = document.getElementById("nome");
const mensagem = document.getElementById("mensagem");

nomeInput.addEventListener("input", function () {

    const valor = nomeInput.value.trim();

    if (valor.length === 0) {
        mensagem.textContent = "";
    }
    else if (valor.length < 3) {
        mensagem.textContent = "Nome muito curto ❌";
        mensagem.style.color = "red";
    }
    else {
        mensagem.textContent = "Nome válido ✅";
        mensagem.style.color = "green";
    }

});