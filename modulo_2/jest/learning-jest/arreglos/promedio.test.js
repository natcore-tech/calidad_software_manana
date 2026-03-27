const { promedio } = require('./promedio');

describe('Promedio', () => {
    test('Happy path: [4,9,2,10] => 6.25', () => {
        expect(promedio([4,9,2,10])).toBe(6.25);
    });

    test('Happy path: [-5,-1] mayor -3 ', () => {
        expect(promedio([-5,-1])).toBe(-3);
    });


    test('Sad path: arreglo invalido', () => {
        expect(() => promedio([])).toThrow('arreglo invalido');
        expect(() => promedio('arreglo')).toThrow('arreglo invalido');
    });
});