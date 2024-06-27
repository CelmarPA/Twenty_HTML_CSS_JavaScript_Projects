// Ao carregar a página
window.onload = function () {
    let segundos = 0;
    let milisegundos = 0;
    let intervalo;

    // Obtém os elementos segundos e milisegundos
    const adicionarSeg = document.querySelector(".segundos");
    const adicionarMil = document.querySelector(".milisegundos");

    // Obtém os elementos para os botões
    const iniciarBtn = document.querySelector(".iniciar");
    const pararBtn = document.querySelector(".parar");
    const resetBtn = document.querySelector(".reset");

    iniciarBtn.onclick = function () {
        clearInterval(intervalo);
        intervalo = setInterval(iniciar, 10);
    };

    pararBtn.onclick = function () {
        clearInterval(intervalo);
    };

    resetBtn.onclick = function () {
        clearInterval(intervalo);
        segundos = 0;
        milisegundos = 0;
        adicionarSeg.innerHTML = "00";
        adicionarMil.innerHTML = "00";
    };

    function iniciar() {
        milisegundos++;
        if (milisegundos < 10) {
            adicionarMil.innerHTML = "0" + milisegundos;
        } else {
            adicionarMil.innerHTML = milisegundos;
        }

        if (milisegundos > 99) {
            segundos++;
            adicionarSeg.innerHTML = segundos < 10 ? "0" + segundos : segundos;
            milisegundos = 0;
            adicionarMil.innerHTML = "00";
        }
    }
};
