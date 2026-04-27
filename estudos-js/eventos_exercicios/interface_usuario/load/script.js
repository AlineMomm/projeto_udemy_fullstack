window.addEventListener("load", function() {
    const loading = document.getElementById("loading");
    const conteudo  = document.getElementById("conteudo");

    // Simulando carregamento (2 segundos)
    setTimeout(function() {
        loading.style.display = "none"
        conteudo.style.display = "flex"
    }, 2000)
})