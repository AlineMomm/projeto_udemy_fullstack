function calcularAlcoolGasolina() {
    let alcool = document.getElementById("preco-alcool").value;
    let gasolina = document.getElementById("preco-gasolina").value;
    let resultado = alcool / gasolina;

    if (alcool == "" || gasolina == "") {
        document.getElementById("resultado").innerHTML = "Preencha os preços primeiro!";
    } else {
        if (resultado >= 0.7) {
            document.getElementById("resultado").innerHTML = "Melhor usar Gasolina";
        } else {
            document.getElementById("resultado").innerHTML = "Melhor usar Álcool";
        }
    }
}

document.getElementById("botao-calcular").addEventListener("click", calcularAlcoolGasolina);