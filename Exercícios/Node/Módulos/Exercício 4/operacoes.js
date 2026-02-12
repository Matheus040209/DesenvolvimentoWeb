const validacoes = require("./validacoes");

function somar(numero1, numero2) {
    if (!validacoes.validarNumeros(numero1, numero2)) {
        console.log("Valores inválidos");
        return;
    }

    numero1 = Number(numero1);
    numero2 = Number(numero2);

    console.log("A soma dos valores é:", numero1 + numero2);
}

function subtrair(numero1, numero2) {
    if (!validacoes.validarNumeros(numero1, numero2)) {
        console.log("Valores inválidos");
        return;
    }

    numero1 = Number(numero1);
    numero2 = Number(numero2);

    console.log("A subtração dos valores é:", numero1 - numero2);
}

function multiplicar(numero1, numero2) {
    if (!validacoes.validarNumeros(numero1, numero2)) {
        console.log("Valores inválidos");
        return;
    }

    numero1 = Number(numero1);
    numero2 = Number(numero2);

    console.log("A multiplicação dos valores é:", numero1 * numero2);
}

function dividir(numero1, numero2) {
    if (!validacoes.validarNumeros(numero1, numero2)) {
        console.log("Valores inválidos");
        return;
    }

    numero1 = Number(numero1);
    numero2 = Number(numero2);

    if (numero2 === 0) {
        console.log("Não é possível dividir por zero");
        return;
    }

    console.log("A divisão dos valores é:", numero1 / numero2);
}

module.exports = {
    somar,
    subtrair,
    multiplicar,
    dividir
};
