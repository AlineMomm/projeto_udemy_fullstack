const bebida = document.getElementById("bebida");
const preco = document.getElementById("preco");

bebida.addEventListener("change", function () {

    let valor = bebida.value;
    let precoFinal = 0;

    if (valor === "expresso") {
        precoFinal = 8;
    }
    else if (valor === "americano") {
        precoFinal = 9;
    }
    else if (valor === "cappuccino") {
        precoFinal = 12;
    }
    else if (valor === "latte") {
        precoFinal = 11;
    }

    if (valor === "") {
        preco.textContent = "Preço: R$ --";
    } else {
        preco.textContent = "Preço: R$ " + precoFinal;
    }

});