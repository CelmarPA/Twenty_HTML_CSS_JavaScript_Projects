(function () {
    // Obtém os elementos botao
    const botoes = document.querySelectorAll(".botao");
    let cont = 0;

    const contador = document.querySelector(".elemento-contador");
    const containerContador = document.querySelector(".contador");

    // Função para aumentar e dimunior o contador
    botoes.forEach(function (botao) {
        botao.addEventListener("click", function () {
            if (botao.classList.contains("botao-diminuir")) {
                cont--;
            } else if (botao.classList.contains("botao-aumentar")) {
                cont++;
            }

            contador.textContent = cont;

            if (cont > 0) {
                containerContador.classList.remove("negativo");
                containerContador.classList.add("positivo");
            } else if (cont < 0) {
                containerContador.classList.remove("positivo");
                containerContador.classList.add("negativo");
            } else {
                containerContador.classList.remove("positivo", "negativo");                
            }
        });
    });
})();
