// Obtém os elementos inputs

const formulario = document.querySelector(".formulario");
const usuario = document.querySelector(".usuario");
const email = document.querySelector(".email");
const senha = document.querySelector(".senha");
const senhaVerificacao = document.querySelector(".senhaVerificacao");

// Adicionar os eventListiners
formulario.addEventListener("submit", function (e) {
    e.preventDefault();

    verificarInputs();
});

function verificarInputs() {
    // Obtém os valores dos inputs
    const usuarioValue = usuario.value.trim();
    const emailValue = email.value.trim();
    const senhaValue = senha.value.trim();
    const senhaVerificacaoValue = senhaVerificacao.value.trim();

    if (usuarioValue === "") {
        setErroPara(usuario, "Nome não pode ser vazio");
    } else {
        setSucessoPara(usuario);
    }

    if (emailValue === "") {
        setErroPara(email, "E-mail não pode ser vazio");
    } else if (!isEmail(emailValue)) {
        setErroPara(email, "Digite um e-mail válido");
    } else {
        setSucessoPara(email);
    }

    if (senhaValue === "") {
        setErroPara(senha, "Senha não pode ser vazio");
    } else {
        setSucessoPara(senha);
    }

    if (senhaVerificacaoValue === "") {
        setErroPara(senhaVerificacao, "Verificar senha não pode ser vazio");
    } else if (senhaValue !== senhaVerificacaoValue) {
        setErroPara(senhaVerificacao, "As senhas não correspondem");
    } else {
        setSucessoPara(senhaVerificacao);
    }
}

function setErroPara(input, mensagem) {
    const formControle = input.parentElement;
    const small = formControle.querySelector(".erro");
    formControle.className = "form-controle fail";
    small.innerText = mensagem;
}

function setSucessoPara(input) {
    const formControle = input.parentElement;
    formControle.className = "form-controle sucesso";
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
    );
}
