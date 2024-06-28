// Obtém os elementos da classe acordeao
const acordeoes = document.querySelectorAll(".acordeao");

// Itera por cada elemento
acordeoes.forEach((acordeao) => {
    acordeao.addEventListener("click", () => {
        acordeao.classList.toggle("active");
    });
});
