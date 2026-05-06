// ===============================
// index.html
// ===============================

const cardsDestaque = document.querySelectorAll(".card-destaque");

cardsDestaque.forEach(function (card) {
    card.addEventListener("mouseover", function () {
        const info = card.querySelector(".info");

        if (info) {
            info.style.display = "block";
        }
    });

    card.addEventListener("mouseout", function () {
        const info = card.querySelector(".info");

        if (info) {
            info.style.display = "none";
        }
    });
});

const loading = document.getElementById("loading");
const conteudo = document.getElementById("conteudo");

if (loading && conteudo) {
    window.addEventListener("load", function () {
        setTimeout(function () {
            loading.style.display = "none";
            conteudo.style.display = "block";
        }, 1000);
    });
}


// ===============================
// servicos.html
// ===============================

const selecionar = document.querySelectorAll(".botao-servico");
const mensagemServico = document.getElementById("servico-selecionado");
const cardsServico = document.querySelectorAll(".card-servico");

selecionar.forEach(function (botao) {
    botao.addEventListener("mouseover", function () {
        const card = this.closest(".card-servico");
        const preco = card.querySelector(".preco-servico");

        if (preco) {
            preco.style.display = "block";
        }
    });

    botao.addEventListener("mouseout", function () {
        const card = this.closest(".card-servico");
        const preco = card.querySelector(".preco-servico");

        if (preco) {
            preco.style.display = "none";
        }
    });

    botao.addEventListener("click", function () {
        const card = this.closest(".card-servico");

        cardsServico.forEach(function (c) {
            c.classList.remove("card-selecionado");
        });

        card.classList.add("card-selecionado");

        const nomeServico = card.querySelector("h3").textContent;

        if (mensagemServico) {
            mensagemServico.textContent = "Serviço selecionado: " + nomeServico;
        }
    });
});

cardsServico.forEach(function (card) {
    card.addEventListener("dblclick", function () {
        card.classList.remove("card-selecionado");

        if (mensagemServico) {
            mensagemServico.textContent = "";
        }
    });
});


// ===============================
// agendamento.html
// ===============================

const formAgendamento = document.querySelector("#agendamento form");

if (formAgendamento) {
    const campos = document.querySelectorAll("#agendamento input, #agendamento select, #agendamento textarea");

    campos.forEach(function (campo) {
        campo.addEventListener("focus", function () {
            campo.classList.add("campo-focus");
        });

        campo.addEventListener("blur", function () {
            campo.classList.remove("campo-focus");
        });
    });

    const nomeDono = document.getElementById("nomeDono");
    const nomePet = document.getElementById("nomePet");
    const tipo = document.getElementById("tipo");

    const banho = document.getElementById("banho");
    const tosa = document.getElementById("tosa");
    const consulta = document.getElementById("consulta");

    const porte = document.querySelectorAll('input[name="porte"]');

    const observacoesAgendamento = document.getElementById("observacoes");
    const contadorAgendamento = document.getElementById("contador");

    const resumoTutor = document.getElementById("resumo-tutor");
    const resumoPet = document.getElementById("resumo-pet");
    const resumoServico = document.getElementById("resumo-servico");
    const resumoPorte = document.getElementById("resumo-porte");
    const resumoObs = document.getElementById("resumo-observacoes");
    const resumoPreco = document.getElementById("resumo-preco");

    observacoesAgendamento.addEventListener("input", function () {
        const maxCaracteres = 50;
        const caracteresDigitados = observacoesAgendamento.value.length;

        contadorAgendamento.textContent = caracteresDigitados + "/" + maxCaracteres + " caracteres";

        if (caracteresDigitados > maxCaracteres) {
            contadorAgendamento.style.color = "red";
        } else {
            contadorAgendamento.style.color = "black";
        }
    });

    function calcularPreco() {
        let total = 0;

        if (banho.value === "banho-simples") {
            total += 40;
        }

        if (banho.value === "banho-premium") {
            total += 60;
        }

        if (tosa.value === "tosa-higienica") {
            total += 50;
        }

        if (tosa.value === "tosa-completa") {
            total += 70;
        }

        if (consulta.value === "consulta-basica") {
            total += 50;
        }

        if (consulta.value === "consulta-avancada") {
            total += 70;
        }

        resumoPreco.textContent = "R$ " + total.toFixed(2).replace(".", ",");
    }

    banho.addEventListener("change", calcularPreco);
    tosa.addEventListener("change", calcularPreco);
    consulta.addEventListener("change", calcularPreco);

    nomePet.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            tipo.focus();
        }
    });

    formAgendamento.addEventListener("submit", function (event) {
        event.preventDefault();

        if (nomeDono.value.trim() === "") {
            alert("Informe o nome do dono.");
            return;
        }

        if (nomePet.value.trim() === "") {
            alert("Informe o nome do pet.");
            return;
        }

        if (tipo.value === "") {
            alert("Selecione o tipo do pet.");
            return;
        }

        if (banho.value === "" && tosa.value === "" && consulta.value === "") {
            alert("Selecione pelo menos um serviço.");
            return;
        }

        let porteSelecionado = "";

        porte.forEach(function (radio) {
            if (radio.checked) {
                porteSelecionado = radio.value;
            }
        });

        if (porteSelecionado === "") {
            alert("Selecione o porte do pet.");
            return;
        }

        let servicos = [];

        if (banho.value !== "") {
            servicos.push(banho.options[banho.selectedIndex].text);
        }

        if (tosa.value !== "") {
            servicos.push(tosa.options[tosa.selectedIndex].text);
        }

        if (consulta.value !== "") {
            servicos.push(consulta.options[consulta.selectedIndex].text);
        }

        resumoTutor.textContent = nomeDono.value;
        resumoPet.textContent = nomePet.value + " - " + tipo.options[tipo.selectedIndex].text;
        resumoServico.textContent = servicos.join(" + ");
        resumoPorte.textContent = porteSelecionado;
        resumoObs.textContent = observacoesAgendamento.value || "Nenhuma observação";

        calcularPreco();
    });
}


// ===============================
// contato.html
// ===============================

const formContato = document.getElementById("formulario-contato");

if (formContato) {
    const textareaContato = document.getElementById("observacoes");
    const contadorContato = document.getElementById("contador-contato");
    const msgContato = document.getElementById("mensagem-sucesso");

    textareaContato.addEventListener("input", function () {
        const max = 200;
        const total = textareaContato.value.length;

        contadorContato.textContent = total + "/" + max + " caracteres";

        if (total > max) {
            contadorContato.style.color = "red";
        } else {
            contadorContato.style.color = "wheat";
        }
    });

    formContato.addEventListener("submit", function (event) {
        event.preventDefault();

        const nome = document.getElementById("nome").value.trim();
        const email = document.getElementById("email").value.trim();
        const mensagem = textareaContato.value.trim();

        if (nome === "") {
            alert("Preencha o nome.");
            return;
        }

        if (email === "") {
            alert("Preencha o e-mail.");
            return;
        }

        if (mensagem === "") {
            alert("Digite uma mensagem.");
            return;
        }

        msgContato.textContent = "Mensagem enviada com sucesso!";
        msgContato.style.color = "lightgreen";

        formContato.reset();
        contadorContato.textContent = "0/200 caracteres";
    });
}