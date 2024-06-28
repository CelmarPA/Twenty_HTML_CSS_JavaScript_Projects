// Obtém os elemento input
const input = document.querySelector("input");

let codigoPais = "";
let codigoDDD = "";
let valorPrevio = "";

input.addEventListener("input", (e) => {
    let inputValue = e.target.value.replace(/\D/g, "");
    if (inputValue.length === 3 && valorPrevio.length < inputValue.length) {
        codigoPais = inputValue.substring(0, 2);
    }
    if (input.value.length === 5 && valorPrevio.length < inputValue.length) {
        codigoDDD = input.value.substring(2, 4);
        input.value = `+${codigoPais}(${codigoDDD}) - ${
            inputValue[inputValue.length - 1]
        }`;
    }

    valorPrevio = inputValue;
});
