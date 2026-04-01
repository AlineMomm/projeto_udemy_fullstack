function mudarFrase() {
    const frases = ["Disciplina é fazer o que precisa ser feito, mesmo quando você não quer.", "O sucesso é a soma de pequenos esforços repetidos dia após dia.", "Acredite em si mesmo e todo o resto virá naturalmente.", "A única maneira de fazer um excelente trabalho é amar o que você faz.", "Não espere por oportunidades, crie-as.", "O fracasso é apenas a oportunidade de começar de novo, desta vez de forma mais inteligente.", "A persistência é o caminho do êxito.", "Acredite que você pode e você já está no meio do caminho." ];
    const  indice = Math.floor(Math.random() * frases.length);
    document.getElementById("frase-motivacional").innerHTML = frases[indice];
}

document.getElementById("botao-nova-frase").addEventListener("click", mudarFrase);