function mayoresEdadFilter(arreglo) {
    if (!Array.isArray(arreglo)) {
        throw new Error('arreglo invalido');
    }
    return arreglo.filter(n=>n>=18)
}

module.exports = { mayoresEdadFilter };
