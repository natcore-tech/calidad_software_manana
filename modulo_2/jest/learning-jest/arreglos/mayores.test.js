const { mayores } = require('./mayores');

describe('Mayores', () => {
    test('Happy path: [12,18,20,17] => [18,20]', () => {
        expect(mayores([12,18,20,17])).toEqual([18,20]);
    });

    test('Happy path: todos mayores [21,30] => [21,30]', () => {
        expect(mayores([21,30])).toEqual([21,30]);
    });

    test('Edge: 18 es considerado mayor [18] => [18]', () => {
        expect(mayores([18])).toEqual([18]);
    });

    test('Happy path: ninguno es mayor devuelve []', () => {
        expect(mayores([10,11,5])).toEqual([]);
    });

    test('Sad path: arreglo invalido', () => {
        expect(() => mayores([])).toThrow('arreglo invalido');
        expect(() => mayores('edificio')).toThrow('arreglo invalido');
        expect(() => mayores(-1,-5)).toThrow('arreglo invalido');
        expect(() => mayores(null)).toThrow('arreglo invalido');
    });
});