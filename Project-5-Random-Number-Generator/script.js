function geradorNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

document.getElementById("botaoGerador").addEventListener("click", function() {
    let min = 1;
    let max = 100;

    let numeroAleatorio = geradorNumeroAleatorio(min, max);

    document.getElementById("resultado").textContent = numeroAleatorio;
});