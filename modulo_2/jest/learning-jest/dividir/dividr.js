function dividir(a, b) {
    // 1. Validaciones
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new TypeError('los argumentos deben ser numeros');
    }
    if (b === 0) {
        throw new Error('no se puede dividir por cero');
    }

    // 2. Lógica y Retorno
    return a / b;
}

module.exports = { dividir };