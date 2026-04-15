const formPedido = document.getElementById("form-pedido");

if (formPedido) {
    const resumoNome = document.getElementById("resumo-nome");
    const resumoBebida = document.getElementById("resumo-bebida");
    const resumoAcompanhamento = document.getElementById("resumo-acompanhamento");
    const resumoTipo = document.getElementById("resumo-tipo");
    const resumoEndereco = document.getElementById("resumo-endereco");

    const entrega = document.getElementById("entrega");
    const retirada = document.getElementById("retirada");
    const campoEndereco = document.getElementById("campo-endereco");

    entrega.addEventListener("change", function () {
        if (entrega.checked) {
            campoEndereco.style.display = "block";
        }
    });

    retirada.addEventListener("change", function () {
        if (retirada.checked) {
            campoEndereco.style.display = "none";
        }
    });

    formPedido.addEventListener("submit", function (evento) {
        evento.preventDefault();

        const nome = document.getElementById("nome").value.trim();
        const bebida = document.getElementById("bebida");
        const acompanhamento = document.getElementById("acompanhamento");
        const tipoSelecionado = document.querySelector('input[name="tipo"]:checked');
        const endereco = document.getElementById("endereco").value.trim();
        const numero = document.getElementById("numero").value.trim();
        const bairro = document.getElementById("bairro").value.trim();

        if (nome === "") {
            alert("Por favor, preencha seu nome.");
            return;
        }

        if (bebida.value === "" && acompanhamento.value === "") {
            alert("Por favor, selecione pelo menos uma bebida ou um acompanhamento.");
            return;
        }

        if (!tipoSelecionado) {
            alert("Por favor, selecione entrega ou retirada.");
            return;
        }

        if (tipoSelecionado.value === "entrega") {
            if (endereco === "" || numero === "" || bairro === "") {
                alert("Por favor, preencha o endereço completo para entrega.");
                return;
            }
        }

        const bebidaTexto = bebida.options[bebida.selectedIndex].text;
        const acompanhamentoTexto = acompanhamento.options[acompanhamento.selectedIndex].text;
        const tipoTexto =
            tipoSelecionado.value.charAt(0).toUpperCase() + tipoSelecionado.value.slice(1);

        resumoNome.textContent = nome;
        resumoBebida.textContent = bebidaTexto;
        resumoAcompanhamento.textContent = acompanhamentoTexto;
        resumoTipo.textContent = tipoTexto;

        if (tipoSelecionado.value === "entrega") {
            resumoEndereco.textContent = `${endereco}, ${numero} - ${bairro}`;
        } else {
            resumoEndereco.textContent = "Retirada no local";
        }
    });
}