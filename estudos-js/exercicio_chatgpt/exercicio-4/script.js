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
