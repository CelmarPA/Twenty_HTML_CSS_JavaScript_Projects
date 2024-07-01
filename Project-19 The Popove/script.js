// Obtém a referência dos elementos
const meuBtn = document.getElementById("meuBtn");
const meuPopover = document.getElementById("meuPopover");
const fecharBtn = document.getElementById("fecharBtn");

meuBtn.addEventListener("click", () => {
    meuPopover.classList.add("active");
});

fecharBtn.addEventListener("click", () => {
    meuPopover.classList.remove("active");
});
