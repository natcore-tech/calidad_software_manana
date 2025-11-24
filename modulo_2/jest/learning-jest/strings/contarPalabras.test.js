<<<<<<< HEAD
const {contarPalabras} = require('./contarPalabras');
=======
const { contarPalabras } = require('./contarPalabras');
>>>>>>> 42efe540b5f4e5d4429a49450888cd3a73f58db8

describe('Contar Palabras', () => {
    test('Happy path: Hola Mundo Jest -> 3', () => {
        const response = contarPalabras(
<<<<<<< HEAD
            'Hola mundo Jest'
        )
        expect (response).toBe(3);
    });
    test('Sad Path: Error',
        () => {
            expect(() => contarPalabras(null
            )).toThrow('frase invalida');
=======
            'Hola Mundo Jest'
        )
        expect(response).toBe(3);
    });

    test('Sad path: ERROR', 
        () => {
            expect(() => contarPalabras(null
                )).toThrow('frase invalida');
>>>>>>> 42efe540b5f4e5d4429a49450888cd3a73f58db8
            expect(() => contarPalabras(''))
                .toThrow('frase invalida');
        });
});