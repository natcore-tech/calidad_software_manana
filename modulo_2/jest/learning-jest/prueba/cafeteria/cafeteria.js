function calcularTotalCafeteria(items, ivaPorcentaje) {
    if (!Array.isArray(items)) {
        throw new Error("La entrada debe ser un arreglo de items");
    }

    let subtotal = 0;

    for (let item of items) {
        let precio = Number(item.precio);

        if (Number.isNaN(precio)) {
            return NaN;
        }

        subtotal += precio;
    }

    let iva = subtotal * (ivaPorcentaje / 100);
    let total = subtotal + iva;

    return total;
}

module.exports = { calcularTotalCafeteria };