const { sumarHasta } = require('./sumarHasta');

describe('sumarHasta', ()=>{
    test('Happy path: 5 suma es', ()=>{
        expect(sumarHasta(5)).toBe(15);
    });
    test('Happy path: 1 suma es', ()=>{
        expect(sumarHasta(1)).toBe(1);
    });
    test('Sad path: numero invalido', ()=>{
        expect(()=>sumarHasta(0)).toThrow('numero invalido');
        expect(()=>sumarHasta('10')).toThrow('numero invalido');
        expect(()=>sumarHasta(2.5)).toThrow('numero invalido');
    });
});