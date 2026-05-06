const nome = document.getElementById("nome");
const email = document.getElementById("email");

const erroNome = document.getElementById("erro-nome");
const erroEmail = document.getElementById("erro-email");

const form = document.getElementById("formulario");


// 🔹 FOCUS → entrou no campo
nome.addEventListener("focus", function () {
    nome.classList.add("input-focus");
});

email.addEventListener("focus", function () {
    email.classList.add("input-focus");
});


// 🔹 BLUR → saiu do campo
nome.addEventListener("blur", function () {

    nome.classList.remove("input-focus");

    if (nome.value.trim() === "") {
        nome.classList.add("input-erro");
        erroNome.textContent = "Nome é obrigatório";
    } else {
        nome.classList.remove("input-erro");
        erroNome.textContent = "";
    }
});

email.addEventListener("blur", function () {

    email.classList.remove("input-focus");

    if (!email.value.includes("@")) {
        email.classList.add("input-erro");
        erroEmail.textContent = "Email inválido";
    } else {
        email.classList.remove("input-erro");
        erroEmail.textContent = "";
    }
});


// 🔹 SUBMIT → valida tudo
form.addEventListener("submit", function (event) {
    event.preventDefault();

    if (nome.value.trim() === "" || !email.value.includes("@")) {
        alert("Corrija os erros antes de enviar.");
        return;
    }

    alert("Pedido enviado com sucesso!");
});