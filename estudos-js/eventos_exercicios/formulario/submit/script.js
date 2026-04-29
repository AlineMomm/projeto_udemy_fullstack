const form = document.getElementById("formulario");
const resultado = document.getElementById("resultado");

form.addEventListener("submit", function (event) {

    // impede recarregar a página
    event.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const bebida = document.getElementById("bebida").value;

    // validação
    if (nome === "") {
        alert("Digite seu nome");
        return;
    }

    if (bebida === "") {
        alert("Escolha uma bebida");
        return;
    }

    // mostrar resultado
    resultado.textContent = `Pedido enviado para ${nome} ☕ (${bebida})`;

});