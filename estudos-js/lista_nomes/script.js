const nomes = [
    "Alan",
    "João",
    "Maria",
    "Pedro",
    "Ana",
]

function carregarNomes() {
    let itensLista=""
    for (let i = 0; i < nomes.length; i++) {
        const nome = nomes[i]
        itensLista += `<li>${nome}</li>`
    }
    document.getElementById('lista-nomes').innerHTML = itensLista
}

function pesquisarNome() {
    const nomePesquisado = document.getElementById('nome').value
    let itensLista=""
    for (let i = 0; i < nomes.length; i++) {
        const nome = nomes[i]
        if (nomePesquisado==nome) {
            itensLista += `<li>${nome}</li>`
        }
    }
    document.getElementById('lista-nomes').innerHTML = itensLista
}