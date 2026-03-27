const { mayoresEdadFilter } = require('./mayoresEdadFilter');

describe('Mayores de Edad con Filter', () => {
    test('Happy path: [12,18,20,17] => [18,20]', () => {
        expect(mayoresEdadFilter([12,18,20,17])).toEqual([18,20]);
    });

    test('Happy path: [] mayores [] ', () => {
        expect(mayoresEdadFilter([])).toEqual([]);
    });


    test('Sad path: arreglo invalido', () => {
        expect(() => mayoresEdadFilter('arreglo')).toThrow('arreglo invalido');
    });
});