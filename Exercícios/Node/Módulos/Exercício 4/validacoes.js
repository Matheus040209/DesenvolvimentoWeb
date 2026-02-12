function validarNumeros(numero1, numero2) {
    return Number.isFinite(Number(numero1)) &&
           Number.isFinite(Number(numero2));
}

module.exports = {
    validarNumeros
};
