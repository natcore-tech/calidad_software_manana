<<<<<<< HEAD
const { enMayusculas } = require("./enMayusculas")

decribe('En Mayusculas', () => {
    test('Happy path: JEST', () => {
        const response = enMayusculas('jest')
        expect (response).toBe('JEST');
    });
    test('Sad path: ERROR',
        () => {
            expect(() => enMayusculas(null
            )).toThrow('texto invalido');
            expect(() => enMayusculas (123))
=======
const { enMayusculas } = require('./enMayusculas');

describe('En Mayusculas', () => {
    test('Happy path: JEST', () => {
        const response = enMayusculas('jest')
        expect(response).toBe('JEST');
    });

    test('Sad path: ERROR', 
        () => {
            expect(() => enMayusculas(
                null
             )).toThrow('texto invalido');
            expect(() => enMayusculas(123))
>>>>>>> 42efe540b5f4e5d4429a49450888cd3a73f58db8
                .toThrow('texto invalido');
        });
});