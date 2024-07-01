// Obtém elemento botão
const btnGerar = document.getElementById("btn-gerar");

btnGerar.addEventListener("click", updateCor);

function gerarCorAleatoria() {
    const letras = "0123456789ABCDEF";
    let cor = "#";

    for (let i = 0; i < 6; i++) {
        cor += letras[Math.floor(Math.random() * 16)];
    }

    return cor;
}

function updateCor() {
    const corBox = document.getElementById("corBox");
    const corTexto = document.getElementById("cor-texto");

    const corAleatoria =  gerarCorAleatoria();

    corBox.style.backgroundColor = corAleatoria;
    corTexto.textContent = corAleatoria;
}