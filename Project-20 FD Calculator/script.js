function calcularValorFinal() {
    // Obtém os valores dos inputs
    const inicial = Number(document.getElementById("valor-inicial").value);
    const taxaJuros = Number(document.getElementById("juros").value);
    const periodo = Number(document.getElementById("periodo").value);

    // Realizar os calculos
    const valorFinal = inicial + (inicial * taxaJuros * periodo) / 100;

    // Apresentar valor final
    document.getElementById(
        "resultado"
    ).innerText = `Valor no vencimento: ${valorFinal.toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL",
    })}`;
}

// Listiner para o botão calcular
document
    .getElementById("calcularBtn")
    .addEventListener("click", calcularValorFinal);
