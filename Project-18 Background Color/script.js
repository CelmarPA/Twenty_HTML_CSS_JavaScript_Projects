// Obtém o elemento body

const body = document.body;

body.addEventListener("click", mudarCorDeFundo);

function mudarCorDeFundo() {
    const corAleatoria = obterCorAleatoria();
    body.style.backgroundColor = corAleatoria;
}

function obterCorAleatoria() { // Gerador de cores Aleátorias
    const letras = "0123456789ABCDEF";
    let cor = "#";

    for (let i = 0; i < 6; i++) {
        cor += letras[Math.floor(Math.random() * 16)];
    }

    return cor;
}