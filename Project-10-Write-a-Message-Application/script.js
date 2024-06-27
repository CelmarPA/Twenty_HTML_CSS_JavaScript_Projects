function mostrarConteudoMensagem(mensagem) {
    const conteudoMensagem = document.querySelector(".conteudo-mensagem");
    conteudoMensagem.textContent = `"${mensagem}" = Sua Mensagem foi Enviada!`;
}

function mostrarMensagemInvalida() {
    const mensagemInvalida = document.querySelector(".msn-invalida");
    mensagemInvalida.style.display = "block";
    setTimeout(() => {
        mensagemInvalida.style.display = "none";
    }, 2000);
}

function enviar(e) {
    e.preventDefault();
    
    const input = document.querySelector(".mensagem")
    const mensagem = input.value.trim();

    if (mensagem === "") {
        mostrarMensagemInvalida();
    } else {
        mostrarConteudoMensagem(mensagem);
        input.value = "";
    }
}

(function () {
    const formulario = document.querySelector(".formulario");
    formulario.addEventListener("submit", enviar)
})();