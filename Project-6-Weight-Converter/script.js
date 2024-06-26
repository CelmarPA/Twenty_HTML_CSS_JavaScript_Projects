// Obter o elemento formulário
const formulario = document.querySelector("form");

// Adiciona um evento ao formulario
formulario.addEventListener("submit", function (e) {
    e.preventDefault();

    // Obtém os elementos input e span
    const input = document.querySelector("input");
    const output = document.querySelector("span");

    // Declara uma váriavel
    let kgTolibra;

    // Condição para verificar se o valor fornecido pelo usuário é válido
    if (isNaN(input.value) || input.value <= 0) {
        output.classList.add("error");
        output.innerHTML = "<p>Por favor digite um número válido!</p>";

        setTimeout(() => {
            output.innerHTML = "";
            output.classList.remove("error");
        }, 2500);

        input.value = "";
    } else {
        // Converte quilogramas para libras
        kgTolibra = Number(input.value) * 2.20462;

        output.classList.add("successful");
        output.innerHTML = `${kgTolibra.toFixed(3)}`;

        setTimeout(() => {
            output.innerHTML = "";
            output.classList.remove("successful");
            input.value = "";
        }, 10000);
    }
});
