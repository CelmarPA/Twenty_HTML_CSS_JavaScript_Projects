// Obter os elementos
const botoes = document.querySelectorAll(".botao");
const body = document.querySelector("body");

// Função para mudança das cores
botoes.forEach((botao) => {
    botao.addEventListener("click", (e) => {
        if (e.target.id) {
            body.style.backgroundColor = e.target.id;
        }
    });
});
