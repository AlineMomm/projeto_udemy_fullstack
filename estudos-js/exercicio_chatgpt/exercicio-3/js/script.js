
// Pegar e exibir data atual
const dataAtual = document.querySelector("#data-atual");

window.addEventListener("load", function () {
    const hoje = new Date();

    const dataFormatada = hoje.toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "long",
        year: "numeric"
    });

    dataAtual.textContent = dataFormatada;
});

// Adicionar foto de perfil
const iconePerfil = document.querySelector("#icone-perfil");
const inputFotoPerfil = document.querySelector("#input-foto-perfil");

window.addEventListener("load", function () {
    const imagemSalva = localStorage.getItem("fotoPerfil");

    if (imagemSalva) {
        iconePerfil.src = imagemSalva;
    }
});

inputFotoPerfil.addEventListener("change", function () {
    const arquivo = inputFotoPerfil.files[0];

    if (arquivo) {
        const leitor = new FileReader();

        leitor.addEventListener("load", function () {
            iconePerfil.src = leitor.result;

            localStorage.setItem("fotoPerfil", leitor.result);
        });

        leitor.readAsDataURL(arquivo);
    }
});

//Foco e blur nos campos do formulário
const formCadastro = document.getElementById("formulario-cadastrar")

if (formCadastro) {
    const campos = document.querySelectorAll(".campos-cadastrar input,.campos-cadastrar select, .campos-cadastrar textarea,.campos-filtro input,.campos-filtro select")

    campos.forEach(function (campo) {
        campo.addEventListener("focus", function () {
            campo.classList.add("campo-focus")
        })
        campo.addEventListener("blur", function () {
            campo.classList.remove("campo-focus");
        });
    })
}

// Cadastro e listagem de tarefas

const inputNome = document.querySelector("#nome");
const selectCategoria = document.querySelector("#categoria");
const selectPrioridade = document.querySelector("#prioridade");
const textareaDescricao = document.querySelector("#descricao");

const cardsTarefas = document.querySelector("#cards-tarefas");

const totalCadastradas = document.querySelector("#total-cadastradas");
const totalPendentes = document.querySelector("#total-pendentes");
const totalConcluidas = document.querySelector("#total-concluidas");
const totalPrioridade = document.querySelector("#total-prioridade");

let tarefas = [];

formCadastro.addEventListener("submit", function (evento) {
    evento.preventDefault();

    const nome = inputNome.value.trim();
    const categoria = selectCategoria.value;
    const prioridade = selectPrioridade.value;
    const descricao = textareaDescricao.value.trim();

    if (nome === "" || categoria === "" || prioridade === "" || descricao === "") {
        alert("Preencha todos os campos antes de cadastrar a tarefa.");
        return;
    }

    const novaTarefa = {
        id: Date.now(),
        nome: nome,
        categoria: categoria,
        prioridade: prioridade,
        descricao: descricao,
        concluida: false
    };

    tarefas.push(novaTarefa);

    renderizarTarefas();
    atualizarResumo();

    formCadastro.reset();
});

function renderizarTarefas(listaDeTarefas = tarefas) {
    cardsTarefas.innerHTML = "";

    if (tarefas.length === 0) {
        cardsTarefas.innerHTML = `
            <p id="mensagem-sem-tarefas">Nenhuma tarefa cadastrada ainda.</p>
        `;
        return;
    }

    if (listaDeTarefas.length === 0) {
        cardsTarefas.innerHTML = `
            <p id="mensagem-sem-tarefas">Nenhuma tarefa encontrada com esses filtros.</p>
        `;
        return;
    }

    listaDeTarefas.forEach(function (tarefa) {
        const classeCategoria = "categoria-" + tarefa.categoria;
        const classePrioridade = "prioridade-" + tarefa.prioridade;

        let textoStatus = "Pendente";
        let classeStatus = "pendente";
        let classeCardConcluido = "";
        let classeBolinha = "";
        let textoBotaoConcluir = "✓ Concluir";
        let classeBotaoConcluir = "botao-concluir";

        if (tarefa.concluida === true) {
            textoStatus = "Concluída";
            classeStatus = "concluida";
            classeCardConcluido = "card-concluido";
            classeBolinha = "status-concluido";
            textoBotaoConcluir = "↶ Desfazer";
            classeBotaoConcluir = "botao-desfazer";
        }

        cardsTarefas.innerHTML += `
            <div class="card-tarefa ${classeCardConcluido}">
                <div class="status-tarefa ${classeBolinha}"></div>

                <div class="conteudo-tarefa">
                    <div class="cabecalho-tarefa">
                        <h3>${tarefa.nome}</h3>
                        <span class="tag ${classeCategoria}">${formatarTexto(tarefa.categoria)}</span>
                        <span class="tag ${classePrioridade}">${formatarTexto(tarefa.prioridade)}</span>
                    </div>

                    <p>${tarefa.descricao}</p>
                </div>

                <div class="acoes-tarefa">
                    <span class="status ${classeStatus}">${textoStatus}</span>

                    <div class="botoes-tarefa">
                        <button class="${classeBotaoConcluir}" onclick="concluirTarefa(${tarefa.id})">
                            ${textoBotaoConcluir}
                        </button>

                        <button class="botao-excluir" onclick="excluirTarefa(${tarefa.id})">
                            Excluir
                        </button>
                    </div>
                </div>
            </div>
        `;
    });
}

function concluirTarefa(id) {
    tarefas.forEach(function (tarefa) {
        if (tarefa.id === id) {
            tarefa.concluida = !tarefa.concluida;
        }
    });

    renderizarTarefas();
    atualizarResumo();
}

function excluirTarefa(id) {
    const confirmar = confirm("Tem certeza que deseja excluir esta tarefa?");

    if (confirmar === false) {
        return;
    }

    tarefas = tarefas.filter(function (tarefa) {
        return tarefa.id !== id;
    });

    renderizarTarefas();
    atualizarResumo();
}

function atualizarResumo() {
    const tarefasPendentes = tarefas.filter(function (tarefa) {
        return tarefa.concluida === false;
    });

    const tarefasConcluidas = tarefas.filter(function (tarefa) {
        return tarefa.concluida === true;
    });

    const tarefasPrioridadeAlta = tarefas.filter(function (tarefa) {
        return tarefa.prioridade === "alta";
    });

    totalCadastradas.innerText = tarefas.length;
    totalPendentes.innerText = tarefasPendentes.length;
    totalConcluidas.innerText = tarefasConcluidas.length;
    totalPrioridade.innerText = tarefasPrioridadeAlta.length;
}

function formatarTexto(texto) {
    return texto.charAt(0).toUpperCase() + texto.slice(1);
}

const inputPesquisar = document.querySelector("#pesquisar");
const selectCategoriaFiltro = document.querySelector("#categoria-filtro");
const checkboxPendentes = document.querySelector("#mostrar-pendentes");
const formFiltro = document.querySelector("#formulario-filtro");


formFiltro.addEventListener("submit", function (evento) {
    evento.preventDefault();
});

inputPesquisar.addEventListener("input", filtrarTarefas);
selectCategoriaFiltro.addEventListener("change", filtrarTarefas);
checkboxPendentes.addEventListener("change", filtrarTarefas);

function filtrarTarefas() {
    const textoPesquisa = inputPesquisar.value.trim().toLowerCase();
    const categoriaSelecionada = selectCategoriaFiltro.value;
    const mostrarSomentePendentes = checkboxPendentes.checked;

    const tarefasFiltradas = tarefas.filter(function (tarefa) {
        const nomeConfere = tarefa.nome.toLowerCase().includes(textoPesquisa);

        const categoriaConfere = categoriaSelecionada === "" || tarefa.categoria === categoriaSelecionada;

        const pendenteConfere = mostrarSomentePendentes === false || tarefa.concluida === false;

        return nomeConfere && categoriaConfere && pendenteConfere;
    });

    renderizarTarefas(tarefasFiltradas);
}

