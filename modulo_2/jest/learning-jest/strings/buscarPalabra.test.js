<<<<<<< HEAD
const { contarPalabras } = require('./contarPalabras');

describe('Contar Palabras', () => {
    test('Happy path: Hola Mundo Jest -> 3', () => {
        const response = contarPalabras('Hola mundo Jest');
        expect(response).toBe(3);
    });

    test('Sad path: ERROR', () => {
        expect(() => contarPalabras(null)).toThrow('frase inválida');
        expect(() => contarPalabras('')).toThrow('frase inválida');
    });
=======
const { buscarPalabra } = require('./buscarPalabra');

describe('Buscar Palabra', () => {
    test('Happy path: Buscar Palabra', () => {
        const response = buscarPalabra(
            'Hola mundo Jest', 'Jest'
        )
        expect(response).toBe(true);
        const response2 = buscarPalabra(
            'Hola mundo Jest', 'Jesty'
        )
        expect(response2).toBe(false);
    });

    test('Sad path: ERROR', 
        () => {
            expect(() => buscarPalabra(null, 'jest'
                )).toThrow('frase invalida');
            expect(() => buscarPalabra('',344))
                .toThrow('frase invalida');
        });
>>>>>>> 42efe540b5f4e5d4429a49450888cd3a73f58db8
});