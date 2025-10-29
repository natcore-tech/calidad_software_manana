function mayores(edades) {
    if (!Array.isArray(edades) || edades.length === 0) {
        throw new Error('arreglo invalido');
    }

    const resultado = [];
    for (let i = 0; i < edades.length; i++) {
        const run = edades[i];
        if (typeof run === 'number' && e >= 18) {
            resultado.push(run);
        }
    }
    return resultado;
}

module.exports = { mayores };
