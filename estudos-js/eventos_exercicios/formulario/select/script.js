const observacao = document.getElementById("observacao");
const resultado = document.getElementById("resultado");

observacao.addEventListener("select", function () {
    const inicio = observacao.selectionStart;
    const fim = observacao.selectionEnd;

    const textoSelecionado = observacao.value.substring(inicio, fim);

    resultado.textContent = textoSelecionado;
});