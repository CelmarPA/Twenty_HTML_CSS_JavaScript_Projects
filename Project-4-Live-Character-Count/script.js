// Obtém o elemento da área de texto
const areaTexto = document.querySelector("#area-de-texto");

// Obtém o elemento contador
const contador = document.querySelector(".contador");

// Função contador
function contarCharactere() {
    let lengthTexto = areaTexto.value.length;

    contador.innerText = `${lengthTexto}`;
}