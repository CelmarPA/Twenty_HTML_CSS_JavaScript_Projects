// Objeto data
let data = new Date();

// Obtém o dia
let dia = data.getDay();

let diaHoje;

let citar;

// Condição para definir o dia da semana e a citação
switch (dia) {
    case 0:
        diaHoje = "Domingo";
        citar = "Dia de relaxar";
        break;

    case 1:
        diaHoje = "Segunda-feira";
        citar = "Segunda é dia de trabalhar";
        break;

    case 2:
        diaHoje = "Terça-feira";
        citar = "Terça é o segundo dia de tralalhar";
        break;

    case 3:
        diaHoje = "Quarta-feira";
        citar = "Quarta é o terceiro dia de trabalhar";
        break;

    case 4:
        diaHoje = "Quinta-feira";
        citar = "Quinta é o quarto dia de trabalhar";
        break;

    case 5:
        diaHoje = "Sexta-feira";
        citar = "Final de semana está quase aqui";
        break;

    case 6:
        diaHoje = "Sábado";
        citar = "Hora de festejar";
        break;
}

// Obtem o elemento dia da semna e citar e atualizar seus valores
let diaDaSemana = document.querySelector(".dia-da-semana");
diaDaSemana.innerHTML = `${diaHoje}`;

let frase = document.querySelector(".citar");
frase.innerHTML = `${citar}`;
