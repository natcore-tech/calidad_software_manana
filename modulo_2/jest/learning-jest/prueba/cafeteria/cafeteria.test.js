const { calcularTotalCafeteria } = require('./cafeteria');

describe('calcularTotalCafeteria', () => {
    test('Happy path: calcula el total correctamente con IVA', () => {
        const items = [
            { nombre: 'Café', precio: 100 },
            { nombre: 'Té', precio: 50 },
            { nombre: 'Jugo', precio: 80 }
        ];
        const ivaPorcentaje = 21;
        const totalEsperado = 278.3; 

        const totalCalculado = calcularTotalCafeteria(items, ivaPorcentaje);

        expect(totalCalculado).toBeCloseTo(totalEsperado, 2);
    });

    test('Sad path: entradas inválidas (lanza o produce NaN)', () => {
        expect(() => calcularTotalCafeteria(null, 21)).toThrow();
        expect(() => calcularTotalCafeteria('no-es-arreglo', 21)).toThrow();

        const itemsMalos = [{ nombre: 'Café', precio: 'cien' }];
        const totalMal = calcularTotalCafeteria(itemsMalos, 21);
        expect(Number.isNaN(totalMal)).toBe(true);
    });
});