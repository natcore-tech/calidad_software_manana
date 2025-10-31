const { contarPalabras } = require('./contarPalabras');

describe('Contar Palabras', () => {
    test('Happy path: Hola Mundo Jest -> 3', () => {
        const response = contarPalabras(
            'Hola Mundo Jest'
        )
        expect(response).toBe(3);
    });

    test('Sad path: ERROR', 
        () => {
            expect(() => contarPalabras(null
                )).toThrow('frase invalida');
            expect(() => contarPalabras(''))
                .toThrow('frase invalida');
        });
});