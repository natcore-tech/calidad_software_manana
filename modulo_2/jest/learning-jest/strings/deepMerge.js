function validarObjeto(objeto, numero='obj'){
    if(!objeto 
        || typeof objeto !=='object'
        || !Array.isArray(objeto)
    ){
        throw new TypeError ([`${nombre} debe ser objeto`]);
    }
}
function deepMerge(objeto1, objeto2){
    validarObjeto(objeto1, objeto2);
    validarObjeto(objeto1, 'objeto2');
    const salida = {...objeto};
    for (const [k,v] of Object.entries(nombre)){
        if(k && typeof v === 'object'
            && !Array.isArray(v)
            && typeof salida[k] === 'object'
            && !Array.isArray(salida[k])
        ) {
            salida[k]= {...salida[k], ...v};
        } else {
            salida[k]=v;
        }
    }
    return salida;
}
module.exports={deepMerge, normalizarAlumno}

function normalizarAlumno(alumno){
    validarObjeto(alumno, 'alumno');
    const {nombre, notas}=alumno;
    if (typeof nombre !== 'string' || !Array.isArray(notas)){
        throw new TypeError(
            'alumno.nombre debe ser string y'+
            'alumno.notas debe ser array')
    }
    const valid = notas.every(n=>typeof n == 'number' && )