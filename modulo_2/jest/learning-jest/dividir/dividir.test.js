const { dividir } = require('./dividr');

describe('Pruebas de dividir', () => {
    
    test('Happy path: division correcta', () => {
        expect(dividir(10, 2)).toBe(5); // Usamos toBe para números simples
        expect(dividir(5, 2)).toBe(2.5);
    });

    test('Sad path: parametros invalidos', () => {
        // Recuerda la función flecha () => para capturar el error
        expect(() => dividir('hola', 2)).toThrow('los argumentos deben ser numeros');
        expect(() => dividir(10, 0)).toThrow('no se puede dividir por cero');
    });

});