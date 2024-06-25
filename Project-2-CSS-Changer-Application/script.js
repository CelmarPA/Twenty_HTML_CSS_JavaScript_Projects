// Seleção dos elementos
const inputs = document.querySelectorAll(".controlador-css input");

// Adicionar um evento a cada input
inputs.forEach((inputs) => inputs.addEventListener("change", update));

function update() {
    // Obter o sufixo de dados
    const sufixoDados = this.dataset.sizing || "";

    // Atualizar a propriedade CSS
    document.documentElement.style.setProperty(
        `--${this.name}`,
        this.value + sufixoDados
    );
}