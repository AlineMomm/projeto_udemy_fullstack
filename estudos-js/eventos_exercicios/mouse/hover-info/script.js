const cards = document.querySelectorAll(".card");
const info = document.getElementById("info");

cards.forEach(function (card) {

    card.addEventListener("mouseover", function (event) {
        const texto = event.target.getAttribute("data-info");
        info.textContent = texto;
    });

    card.addEventListener("mouseout", function () {
        info.textContent = "";
    });

});