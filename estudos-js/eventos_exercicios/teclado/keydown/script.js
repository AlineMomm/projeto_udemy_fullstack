const busca = document.getElementById("busca");
const itens = document.querySelectorAll(".item");

busca.addEventListener("keydown", function () {

    // espera a tecla ser aplicada
    setTimeout(function () {

        const texto = busca.value.toLowerCase();

        itens.forEach(function (item) {

            const nome = item.textContent.toLowerCase();

            if (nome.includes(texto)) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }

        });

    }, 0);

});