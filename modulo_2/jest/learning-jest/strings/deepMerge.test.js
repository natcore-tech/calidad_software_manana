const { deepMerge } = require('./deepMerge');

<<<<<<< HEAD
describe('Buscar Palabras', () => {
    test('Happy path: Buscar palabra', () => {
        const response = buscarPalabra(
            'Hola mundo Jest', 'Jest'
        );
        expect(response).toBe(true);

        const response2 = buscarPalabra(
            'Hola mundo Jest', 'Jesty'
        );
        expect(response2).toBe(false);
    });

    test('Sad path: ERROR', () => {
        expect(() => buscarPalabra(null, 'jest'))
            .toThrow('frase inválida');
        expect(() => buscarPalabra('', 344))
            .toThrow('frase inválida');
    });
=======
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